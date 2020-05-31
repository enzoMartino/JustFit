import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExerciseApiModel } from '../../models/exercise.api.model';

@Component({
  selector: 'exercise-list-item',
  templateUrl: 'exercise-list-item.html'
})

export class ExerciseListItemComponent {

  @Input() exercise: ExerciseApiModel;

  @Output() addButtonClicked: EventEmitter<ExerciseApiModel>;
  @Output() viewButtonClicked: EventEmitter<ExerciseApiModel>;

  constructor() {
    this.addButtonClicked = new EventEmitter();
    this.viewButtonClicked = new EventEmitter();
  }

  onAddButtonClicked() { this.addButtonClicked.emit(this.exercise); }

  onViewButtonClicked() { this.viewButtonClicked.emit(this.exercise); }

}
