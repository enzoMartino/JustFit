import { Component, Input } from '@angular/core';
import { ClientModel } from '../../models/client.model';
import { NavController } from 'ionic-angular';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@Component({
  selector: 'client-list-item',
  templateUrl: 'client-list-item.html'
})

export class ClientListItemComponent {

  @Input() client: ClientModel;

  constructor(
    public navCtrl: NavController,
  ) { }

  onCreateGymSheetButtonClicked() {
    this.navCtrl.push(EnumNavigationMain.CreateGymSheetPage);
  }

}
