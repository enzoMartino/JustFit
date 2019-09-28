import { NgModule } from '@angular/core';
import { CommonNavbarComponent } from './common-navbar/common-navbar';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [
		CommonNavbarComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		CommonNavbarComponent
	]
})
export class ComponentsModule { }
