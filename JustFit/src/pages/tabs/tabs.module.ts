import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ComponentsModule } from '../../components/components.module';
import { ClientFirebaseRepository } from '../../repositories/client/client.firebase.repository';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TabsPage),
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule { }
