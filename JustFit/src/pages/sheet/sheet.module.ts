import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SheetPage } from './sheet';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SheetPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SheetPage),
  ],
})
export class SheetPageModule { }
