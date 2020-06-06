import { Component, Input } from '@angular/core';
import { ExerciseApiModel } from '../../models/exercise.api.model';

@Component({
  selector: 'exercise-list-item',
  templateUrl: 'exercise-list-item.html'
})

export class ExerciseListItemComponent {

  @Input() exercise: ExerciseApiModel;

  constructor() { }

}
