import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClientModel } from '../../models/client.model';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'client-list-item',
  templateUrl: 'client-list-item.html'
})

export class ClientListItemComponent {

  @Input() client: ClientModel;

  @Output() createGymSheetButtonClicked: EventEmitter<ClientModel>;

  constructor(
    public navCtrl: NavController,
  ) {
    this.createGymSheetButtonClicked = new EventEmitter();
  }

  onCreateGymSheetButtonClicked() {
    this.createGymSheetButtonClicked.emit(this.client);
  }

}
