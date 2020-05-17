import { NgModule } from "@angular/core";
import { BaseFirebaseRepository } from "./base.firebase.repository";
import { PersonalTrainerFirebaseRepository } from "./personal.trainer/personal.trainer.firebase.repository";
import { ReviewFirebaseRepository } from "./review/review.firebase.repository";
import { GymSheetFirebaseRepository } from "./gym.sheet/gym.sheet.firebase.repository";
import { ClientFirebaseRepository } from "./client/client.firebase.repository";
import { ExerciseHttpRepository } from "./exercise/exercise.http.repository";
import { BaseHttpRepository } from "./base.http.repository";
import { CategoryHttpRepository } from "./category/category.http.repository";


@NgModule({
  declarations: [
  ],
  providers: [
    BaseFirebaseRepository,
    BaseHttpRepository,
    PersonalTrainerFirebaseRepository,
    ReviewFirebaseRepository,
    GymSheetFirebaseRepository,
    ClientFirebaseRepository,
    ExerciseHttpRepository,
    CategoryHttpRepository
  ],
  exports: [
  ]
})
export class RepositoriesModule { }
