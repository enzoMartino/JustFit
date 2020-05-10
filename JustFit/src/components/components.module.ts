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
@NgModule({
	declarations: [
		CommonNavbarComponent,
		ShrinkingHeaderComponent,
		ReviewsListComponent,
		ReviewListItemComponent,
		ReviewStarsComponent,
		ClientsListComponent,
		ClientListItemComponent
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
		ClientListItemComponent
	]
})
export class ComponentsModule { }
