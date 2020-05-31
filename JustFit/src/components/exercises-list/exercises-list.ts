import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseApiModel } from '../../models/exercise.api.model';

@Component({
  selector: 'exercises-list',
  templateUrl: 'exercises-list.html'
})

export class ExercisesListComponent {

  @Input() exercisesList: ExerciseApiModel[];

  @Output() addButtonClicked: EventEmitter<ExerciseApiModel>;
  @Output() viewButtonClicked: EventEmitter<ExerciseApiModel>;

  constructor() {
    this.addButtonClicked = new EventEmitter();
    this.viewButtonClicked = new EventEmitter();
  }

  onAddButtonClicked(exercise: ExerciseApiModel) { this.addButtonClicked.emit(exercise); }

  onViewButtonClicked(exercise: ExerciseApiModel) { this.viewButtonClicked.emit(exercise); }

}
