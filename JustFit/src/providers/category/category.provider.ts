import { Injectable } from '@angular/core';
import { CategoryHttpRepository } from '../../repositories/category/category.http.repository';
// import { ExerciseHttpRepository } from '../../repositories/exercise/exercise.http.repository';
// import { ExerciseImageHttpRepository } from '../../repositories/exercise-image/exercise.image.http.repository';
// import { map, first, catchError } from 'rxjs/operators';
// import { ExerciseImageApiModel } from '../../models/exercise.image.api.model';
// import { of } from 'rxjs';
// import { GenericApiResponseModel } from '../../models/generic.api.response.model';
// import { ExerciseApiModel } from '../../models/exercise.api.model';

@Injectable()
export class CategoryProvider {

  private readonly categoriesImagesMap = {
    10: "assets/imgs/categories/abs.png",
    8: "assets/imgs/categories/arms.png",
    12: "assets/imgs/categories/back.png",
    14: "assets/imgs/categories/calves.png",
    11: "assets/imgs/categories/chest.png",
    9: "assets/imgs/categories/legs.png",
    13: "assets/imgs/categories/shoulders.png"
  }

  constructor(
    private readonly categoryHttpRepository: CategoryHttpRepository,
    // private readonly exerciseHttpRepository: ExerciseHttpRepository,
    // private readonly exerciseImageHttpRepository: ExerciseImageHttpRepository
  ) { }

  async retrieveExercisesCategoriesWithImages() {
    //TODO: OPTIMIZE
    // await Promise.all(exercisesCategories.map(async (category) => {
    //   let i = 1;
    //   let exercises: GenericApiResponseModel<ExerciseApiModel>;
    //   do {
    //     exercises = await this.exerciseHttpRepository
    //       .retrieveExercisesByCategoryId(category.id, i).toPromise();
    //     await Promise.race(exercises.results.map(async (exercise) => {
    //       const image = await this.exerciseImageHttpRepository.retrieveExerciseImageByExerciseId(exercise.id)
    //         .pipe(
    //           first(images => images.count > 0),
    //           catchError(error => of(console.log(error))),
    //           map(images => images ? images.results[0] : new ExerciseImageApiModel(undefined))
    //         ).toPromise();
    //       category.image = image.image || category.image;
    //     }));
    //     i++;
    //   } while (category.image === undefined && exercises.next !== null);
    // }));
    const exercisesCategories = await this.categoryHttpRepository
      .retrieveExercisesCategories().toPromise();
    exercisesCategories.forEach(x => { x.image = this.categoriesImagesMap[x.id]; });
    return exercisesCategories;
  }

}
