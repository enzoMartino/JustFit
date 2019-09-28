import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-navbar',
  templateUrl: 'common-navbar.html'
})
export class CommonNavbarComponent {

  @Input() title:string;

  constructor() {}

  OnLogoutClicked(event){

  }
}
