import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseDetailPage } from './exercise-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExerciseDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ExerciseDetailPage),
  ],
})
export class ExerciseDetailPageModule {}
