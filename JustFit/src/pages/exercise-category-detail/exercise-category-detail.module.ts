import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciseCategoryDetailPage } from './exercise-category-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExerciseCategoryDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ExerciseCategoryDetailPage),
  ],
})
export class ExerciseCategoryDetailPageModule { }
