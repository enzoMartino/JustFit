import { NgModule } from '@angular/core';
import { CommonNavbarComponent } from './common-navbar/common-navbar';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ShrinkingHeaderComponent } from './shrinking-header/shrinking-header';
import { ReviewsListComponent } from './reviews-list/reviews-list';
import { ReviewListItemComponent } from './review-list-item/review-list-item';
import { ReviewStarsComponent } from './review-stars/review-stars';
import { ClientsListComponent } from './clients-list/clients-list';
import { ClientListItemComponent } from './client-list-item/client-list-item';
import { ExercisesListComponent } from './exercises-list/exercises-list';
import { ExerciseListItemComponent } from './exercise-list-item/exercise-list-item';
import { ExerciseCategotyCardComponent } from './exercise-categoty-card/exercise-categoty-card';
import { ExercisesCategoriesGridComponent } from './exercises-categories-grid/exercises-categories-grid';
import { ExerciseMusclesListComponent } from './exercise-muscles-list/exercise-muscles-list';
import { ExerciseEquipmentsListComponent } from './exercise-equipments-list/exercise-equipments-list';
import { ExerciseEquipmentsListItemComponent } from './exercise-equipments-list-item/exercise-equipments-list-item';
import { ExerciseMusclesListItemComponent } from './exercise-muscles-list-item/exercise-muscles-list-item';
import { DaysOfWeekListComponent } from './days-of-week-list/days-of-week-list';
import { DaysOfWeekListItemComponent } from './days-of-week-list-item/days-of-week-list-item';
import { SettingsListComponent } from './settings-list/settings-list';
import { SettingsListItemComponent } from './settings-list-item/settings-list-item';

@NgModule({
	declarations: [
		CommonNavbarComponent,
		ShrinkingHeaderComponent,
		ReviewsListComponent,
		ReviewListItemComponent,
		ReviewStarsComponent,
		ClientsListComponent,
		ClientListItemComponent,
		ExercisesListComponent,
		ExerciseListItemComponent,
		ExerciseCategotyCardComponent,
		ExercisesCategoriesGridComponent,
		ExerciseMusclesListComponent,
		ExerciseEquipmentsListComponent,
		ExerciseEquipmentsListItemComponent,
		ExerciseMusclesListItemComponent,
		DaysOfWeekListComponent,
		DaysOfWeekListItemComponent,
    SettingsListComponent,
    SettingsListItemComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		CommonNavbarComponent,
		ShrinkingHeaderComponent,
		ReviewsListComponent,
		ReviewListItemComponent,
		ReviewStarsComponent,
		ClientsListComponent,
		ClientListItemComponent,
		ExercisesListComponent,
		ExerciseListItemComponent,
		ExerciseCategotyCardComponent,
		ExercisesCategoriesGridComponent,
		ExerciseMusclesListComponent,
		ExerciseEquipmentsListComponent,
		ExerciseEquipmentsListItemComponent,
		ExerciseMusclesListItemComponent,
		DaysOfWeekListComponent,
		DaysOfWeekListItemComponent,
    SettingsListComponent,
    SettingsListItemComponent 
	]
})
export class ComponentsModule { }
