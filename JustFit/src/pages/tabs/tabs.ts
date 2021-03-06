import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = EnumNavigationMain.HomePage;
  tab2Root = EnumNavigationMain.ProfilePage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

}
