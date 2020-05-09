import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'review-stars',
  templateUrl: 'review-stars.html'
})

export class ReviewStarsComponent implements OnChanges {

  private readonly totalStars: number = 5;

  @Input() rate: number;

  fullStars: number[];
  halfStars: number[];
  emptyStars: number[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.rate && changes.rate.currentValue !== undefined &&
      changes.rate.currentValue !== changes.rate.previousValue) {
      this.drawStars();
    }
  }

  drawStars(): void {
    this.fullStars = this.convertNumberToArray(Math.trunc(this.rate));
    this.halfStars = this.convertNumberToArray(this.drawHalfStars(this.rate));
    this.emptyStars = this.convertNumberToArray(this.totalStars - this.fullStars.length - this.halfStars.length);
  }

  private drawHalfStars(rate: number): number {
    let numberToReturn: number = 0;
    numberToReturn = Number.parseFloat((rate % 1).toFixed(1)) >= 0.5 ? 1 : 0;
    return numberToReturn;
  }

  private convertNumberToArray(number: number): number[] {
    let array: number[] = [];
    array = Array(number).fill(number);
    return array;
  }

}
