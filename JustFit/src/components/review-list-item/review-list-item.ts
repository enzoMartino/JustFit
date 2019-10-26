import { Component } from '@angular/core';

@Component({
  selector: 'review-list-item',
  templateUrl: 'review-list-item.html'
})

export class ReviewListItemComponent {

  reviewTitle: string;
  reviewDescription: string;
  reviewRate: number;

  constructor() { }

}