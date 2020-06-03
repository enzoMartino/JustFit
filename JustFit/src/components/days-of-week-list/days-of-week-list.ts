import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'days-of-week-list',
  templateUrl: 'days-of-week-list.html'
})
export class DaysOfWeekListComponent {

  @Input() daysOfWeek: string[];

  @Output() dayOfWeekClicked: EventEmitter<string>;

  constructor() {
    this.dayOfWeekClicked = new EventEmitter();
  }

  onDayOfWeekClicked(index: number) {
    this.dayOfWeekClicked.emit(this.daysOfWeek[index]);
  }

}
