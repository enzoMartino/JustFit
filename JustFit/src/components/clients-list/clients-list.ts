import { Component, Input } from '@angular/core';
import { ClientModel } from '../../models/client.model';

@Component({
  selector: 'clients-list',
  templateUrl: 'clients-list.html'
})

export class ClientsListComponent {

  @Input() clientsList: ClientModel[];

  constructor() { }

}
