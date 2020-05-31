import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CategoryApiModel } from '../../models/category.api.model';

@Component({
  selector: 'exercises-categories-grid',
  templateUrl: 'exercises-categories-grid.html'
})

export class ExercisesCategoriesGridComponent {

  @Input() exerciseCategories: CategoryApiModel[];

  @Output() exerciseCategoryCardClicked: EventEmitter<CategoryApiModel>;

  constructor() {
    this.exerciseCategoryCardClicked = new EventEmitter();
  }

  onExerciseCategoryCardClicked(index: number) {
    this.exerciseCategoryCardClicked.emit(this.exerciseCategories[index]);
  }

}
