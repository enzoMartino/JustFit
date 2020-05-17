import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateGymSheetPage } from './create-gym-sheet';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CreateGymSheetPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CreateGymSheetPage),
  ],
})
export class CreateGymSheetPageModule { }
