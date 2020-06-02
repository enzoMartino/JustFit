import { Component, Input } from '@angular/core';
import { MuscleApiModel } from '../../models/muscle.api.model';

@Component({
  selector: 'exercise-muscles-list',
  templateUrl: 'exercise-muscles-list.html'
})
export class ExerciseMusclesListComponent {

  @Input() exerciseMuscles: MuscleApiModel[];

  constructor() { }

}
