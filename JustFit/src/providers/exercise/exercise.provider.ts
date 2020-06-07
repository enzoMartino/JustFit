import { Injectable } from '@angular/core';
import { ExerciseHttpRepository } from '../../repositories/exercise/exercise.http.repository';
import { ExerciseImageHttpRepository } from '../../repositories/exercise-image/exercise.image.http.repository';
import { first, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExerciseImageApiModel } from '../../models/exercise.image.api.model';
import { ExerciseCommentHttpRepository } from '../../repositories/exercise-comment/exercise.comment.http.repository';
import { ExerciseCommentApiModel } from '../../models/exercise.comment.api.model';
import { MuscleHttpRepository } from '../../repositories/muscle/muscle.http.repository';
import { EquipmentHttpRepository } from '../../repositories/equipment/equipment.http.repository';
import { ExerciseApiModel } from '../../models/exercise.api.model';
import { GenericMultipleApiResponseModel } from '../../models/generic.multiple.api.response.model';

@Injectable()
export class ExerciseProvider {

  constructor(
    private readonly exerciseHttpRepository: ExerciseHttpRepository,
    private readonly exerciseImageHttpRepository: ExerciseImageHttpRepository,
    private readonly exerciseCommentHttpRepository: ExerciseCommentHttpRepository,
    private readonly muscleHttpRepository: MuscleHttpRepository,
    private readonly equipmentHttpRepository: EquipmentHttpRepository
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
    await this.retrieveExercisesImages(exercisesResponse.results);
    return exercisesResponse;
  }

  async retrieveExerciseCommentByExerciseId(id: number) {
    const response = await this.exerciseCommentHttpRepository
      .retrieveExerciseCommentByExerciseId(id)
      .pipe(
        first(comments => comments.count > 0),
        catchError(error => of(undefined)),
        map(comments => comments ?
          comments.results[0] :
          new ExerciseCommentApiModel("There is no comment for this exercise"))
      )
      .toPromise();
    return response.comment;
  }

  async retrieveExerciseEquipmentsByIds(ids: number[]) {
    ids = Array.from(new Set(ids));
    return await Promise.all(ids.map(async (id) => {
      return await this.equipmentHttpRepository.retrieveEquipmentById(id).toPromise();
    }));
  }

  async retrieveExerciseMusclesByIds(ids: number[]) {
    ids = Array.from(new Set(ids));
    return await Promise.all(ids.map(async (id) => {
      return await this.muscleHttpRepository.retrieveMuscleById(id).toPromise();
    }));
  }

  async retrieveExercisesByIds(ids: number[]) {
    ids = Array.from(new Set(ids));
    const exercises = await Promise.all(ids.map(async (id) => {
      return await this.exerciseHttpRepository.retrieveExerciseById(id)
        .pipe(
          map(x => {
            x.description.replace(/<\/?[^>]+(>|$)/g, "");
            return x;
          }))
        .toPromise();
    }));
    this.retrieveExercisesImages(exercises);
    return exercises;
  }

  private async retrieveExercisesImages(exercises: ExerciseApiModel[]) {
    await Promise.all(exercises.map(async (exercise, index) => {
      const image = await this.exerciseImageHttpRepository
        .retrieveExerciseImageByExerciseId(exercise.id)
        .pipe(
          first(images => images.count > 0),
          catchError(error => of(undefined)),
          map(images => images ?
            images.results[0] :
            new ExerciseImageApiModel("assets/imgs/exercises/exercise-placeholder.png"))
        ).toPromise();
      exercises[index].image = image.image;
    }));
  }

}
