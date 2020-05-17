import { Component, Input } from '@angular/core';
import { CategoryApiModel } from '../../models/category.api.model';

@Component({
  selector: 'exercises-categories-grid',
  templateUrl: 'exercises-categories-grid.html'
})

export class ExercisesCategoriesGridComponent {

  @Input() exerciseCategories: CategoryApiModel[];
 
  constructor() { }

}
