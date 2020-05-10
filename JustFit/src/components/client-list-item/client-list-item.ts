import { Component, Input } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Component({
  selector: 'client-list-item',
  templateUrl: 'client-list-item.html'
})

export class ClientListItemComponent {

  @Input() client: ClientModel;
 
  constructor() { }

}
