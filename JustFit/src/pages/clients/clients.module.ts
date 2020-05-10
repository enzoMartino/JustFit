import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientsPage } from './clients';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ClientsPage,
  ],
  imports: [
    ComponentsModule, 
    IonicPageModule.forChild(ClientsPage),
  ],
})
export class ClientsPageModule { }
