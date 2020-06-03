import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercisesCategoriesPage } from './exercises-categories';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ExercisesCategoriesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ExercisesCategoriesPage),
  ],
})
export class ExercisesCategoriesPageModule {}
