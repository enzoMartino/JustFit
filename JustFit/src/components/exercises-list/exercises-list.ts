import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseApiModel } from '../../models/exercise.api.model';

@Component({
  selector: 'exercises-list',
  templateUrl: 'exercises-list.html'
})

export class ExercisesListComponent {

  @Input() exercisesList: ExerciseApiModel[];

  @Output() exerciseClicked: EventEmitter<number>;

  constructor() {
    this.exerciseClicked = new EventEmitter();
  }

  onExerciseClicked(index: number) { this.exerciseClicked.emit(index); }

}
