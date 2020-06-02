import { Component, Input } from '@angular/core';
import { EquipmentApiModel } from '../../models/equipment.api.model';

@Component({
  selector: 'exercise-equipments-list-item',
  templateUrl: 'exercise-equipments-list-item.html'
})
export class ExerciseEquipmentsListItemComponent {

  @Input() equipment: EquipmentApiModel;

  constructor() { }

}
