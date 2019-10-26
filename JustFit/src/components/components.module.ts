import { NgModule } from '@angular/core';
import { CommonNavbarComponent } from './common-navbar/common-navbar';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { ShrinkingHeaderComponent } from './shrinking-header/shrinking-header';
import { ReviewsListComponent } from './reviews-list/reviews-list';
import { ReviewListItemComponent } from './review-list-item/review-list-item';
import { ReviewStarsComponent } from './review-stars/review-stars';
@NgModule({
	declarations: [
		CommonNavbarComponent,
		ShrinkingHeaderComponent,
    ReviewsListComponent,
    ReviewListItemComponent,
    ReviewStarsComponent
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
    ReviewStarsComponent
	]
})
export class ComponentsModule { }
