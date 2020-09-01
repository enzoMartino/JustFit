import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeProfileDataPage } from './change-profile-data';
import { ComponentsModule } from '../../components/components.module';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  declarations: [
    ChangeProfileDataPage,
  ],
  imports: [
    ComponentsModule,
    NgxErrorsModule,
    IonicPageModule.forChild(ChangeProfileDataPage),
  ],
})
export class ChangeProfileDataPageModule {}
