import { NgModule } from "@angular/core";
import { BaseFirebaseRepository } from "./base.firebase.repository";
import { PersonalTrainerFirebaseRepository } from "./personal.trainer/personal.trainer.firebase.repository";
import { ReviewFirebaseRepository } from "./review/review.firebase.repository";
import { GymSheetFirebaseRepository } from "./gym.sheet/gym.sheet.firebase.repository";
import { ClientFirebaseRepository } from "./client/client.firebase.repository";


@NgModule({
  declarations: [
  ],
  providers: [
    BaseFirebaseRepository,
    PersonalTrainerFirebaseRepository,
    ReviewFirebaseRepository,
    GymSheetFirebaseRepository,
    ClientFirebaseRepository
  ],
  exports: [
  ]
})
export class RepositoriesModule { }
