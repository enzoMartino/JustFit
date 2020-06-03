import { Component, Input } from '@angular/core';

@Component({
  selector: 'days-of-week-list-item',
  templateUrl: 'days-of-week-list-item.html'
})
export class DaysOfWeekListItemComponent {

  @Input() day: string;

  constructor() { }

}
