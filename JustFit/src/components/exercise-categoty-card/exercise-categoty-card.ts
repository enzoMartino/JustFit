import { Component, Input } from '@angular/core';
import { CategoryApiModel } from '../../models/category.api.model';

@Component({
  selector: 'exercise-categoty-card',
  templateUrl: 'exercise-categoty-card.html'
})

export class ExerciseCategotyCardComponent {

  @Input() exerciseCategory: CategoryApiModel; 
 
  constructor() { }

}
