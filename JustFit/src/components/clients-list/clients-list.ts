import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Component({
  selector: 'clients-list',
  templateUrl: 'clients-list.html'
})

export class ClientsListComponent {

  @Input() clientsList: ClientModel[];

  @Output() createGymSheetButtonClicked: EventEmitter<ClientModel>;

  constructor() {
    this.createGymSheetButtonClicked = new EventEmitter();
  }

  onCreateGymSheetButtonClicked(client: ClientModel) {
    this.createGymSheetButtonClicked.emit(client)
  }

}
