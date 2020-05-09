import { Component, Input } from '@angular/core';
import { ReviewModel } from '../../models/review.model';

@Component({
  selector: 'reviews-list',
  templateUrl: 'reviews-list.html'
})

export class ReviewsListComponent {

  @Input() reviewsList: ReviewModel[];

  constructor() { }

}
