import { Component, Input } from '@angular/core';
import { EquipmentApiModel } from '../../models/equipment.api.model';

@Component({
  selector: 'exercise-equipments-list',
  templateUrl: 'exercise-equipments-list.html'
})
export class ExerciseEquipmentsListComponent {

  @Input() exerciseEquipments: EquipmentApiModel[];

  constructor() { }

}
