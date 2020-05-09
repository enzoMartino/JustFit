import { Component, Input } from '@angular/core';
import { ReviewModel } from '../../models/review.model';

@Component({
  selector: 'review-list-item',
  templateUrl: 'review-list-item.html'
})

export class ReviewListItemComponent {

  @Input() review: ReviewModel;

  constructor() { }

}