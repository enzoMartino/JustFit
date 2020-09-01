import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Component({
  selector: 'clients-list',
  templateUrl: 'clients-list.html'
})

export class ClientsListComponent {

  @Input() clientsList: ClientModel[];

  @Output() createGymSheetButtonClicked: EventEmitter<ClientModel>;
  @Output() editGymSheetButtonClicked: EventEmitter<ClientModel>;
  @Output() contactButtonClicked: EventEmitter<ClientModel>;

  constructor() {
    this.createGymSheetButtonClicked = new EventEmitter();
    this.editGymSheetButtonClicked = new EventEmitter();
    this.contactButtonClicked = new EventEmitter();
  }

  onCreateGymSheetButtonClicked(client: ClientModel) {
    this.createGymSheetButtonClicked.emit(client)
  }

  onEditGymSheetButtonClicked(client: ClientModel) {
    this.editGymSheetButtonClicked.emit(client);
  }

  onContactButtonClicked(client: ClientModel) {
    this.contactButtonClicked.emit(client);
  }

}
