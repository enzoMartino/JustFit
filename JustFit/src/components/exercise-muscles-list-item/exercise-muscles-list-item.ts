import { Component, Input } from '@angular/core';
import { MuscleApiModel } from '../../models/muscle.api.model';

@Component({
  selector: 'exercise-muscles-list-item',
  templateUrl: 'exercise-muscles-list-item.html'
})
export class ExerciseMusclesListItemComponent {

  @Input() muscle: MuscleApiModel;

  constructor() { }

}
