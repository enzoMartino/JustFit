import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayOfWeekDetailPage } from './day-of-week-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DayOfWeekDetailPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DayOfWeekDetailPage),
  ],
})
export class DayOfWeekDetailPageModule { }
