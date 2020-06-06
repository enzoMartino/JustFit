import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DayOfWeekDetailPage } from './day-of-week-detail';

@NgModule({
  declarations: [
    DayOfWeekDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DayOfWeekDetailPage),
  ],
})
export class DayOfWeekDetailPageModule {}
