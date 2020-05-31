import { Injectable } from '@angular/core';
import { ExerciseHttpRepository } from '../../repositories/exercise/exercise.http.repository';
import { ExerciseImageHttpRepository } from '../../repositories/exercise-image/exercise.image.http.repository';
import { first, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExerciseImageApiModel } from '../../models/exercise.image.api.model';
import { ExerciseCommentHttpRepository } from '../../repositories/exercise-comment/exercise.comment.http.repository';
import { ExerciseCommentApiModel } from '../../models/exercise.comment.api.model';

@Injectable()
export class ExerciseProvider {

  constructor(
    private readonly exerciseHttpRepository: ExerciseHttpRepository,
    private readonly exerciseImageHttpRepository: ExerciseImageHttpRepository,
    private readonly exerciseCommentHttpRepository: ExerciseCommentHttpRepository
  ) { }

  async retrieveExercises() {
    const response = await this.exerciseHttpRepository.retrieveExercises().toPromise();
    return response;
  }

  async retrieveExercisesByCategoryIdWithImages(id: number, page: number = 1) {
    const exercisesResponse = await this.exerciseHttpRepository
      .retrieveExercisesByCategoryId(id, page)
      .pipe(
        map(x => {
          x.results.forEach(y => y.description = y.description.replace(/<\/?[^>]+(>|$)/g, ""));
          return x;
        })
      ).toPromise();
    await Promise.all(exercisesResponse.results.map(async (exercise, index) => {
      const image = await this.exerciseImageHttpRepository
        .retrieveExerciseImageByExerciseId(exercise.id)
        .pipe(
          first(images => images.count > 0),
          catchError(error => of(console.log(error))),
          map(images => images ?
            images.results[0] :
            new ExerciseImageApiModel("assets/imgs/exercises/exercise-placeholder.png"))
        ).toPromise();
      exercisesResponse.results[index].image = image.image;
    }));
    return exercisesResponse;
  }

  async retrieveExerciseCommentByExerciseId(id: number) {
    const response = await this.exerciseCommentHttpRepository
      .retrieveExerciseCommentByExerciseId(id)
      .pipe(
        first(comments => comments.count > 0),
        catchError(error => of(console.log(error))),
        map(comments => comments ?
          comments.results[0] :
          new ExerciseCommentApiModel("There is no comment for this exercise"))
      )
      .toPromise();
    return response.comment;
  }

}
