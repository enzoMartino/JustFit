import { Component, Input } from '@angular/core';

@Component({
  selector: 'review-stars',
  templateUrl: 'review-stars.html'
})

export class ReviewStarsComponent {

  private readonly totalStars: number = 5;

  @Input() rate: number;

  fullStars: number;
  halfStars: number;
  emptyStars: number;

  constructor() { }

}
