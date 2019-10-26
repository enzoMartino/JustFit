import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth-provider/auth.provider';
import { EnumNavigationMain } from '../models/enum.navigation.main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string;

  constructor(
    private readonly platform: Platform,
    private readonly statusBar: StatusBar,
    private readonly splashScreen: SplashScreen,
    private readonly AuthProvider: AuthProvider,
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    this.statusBar.styleDefault();
    this.splashScreen.hide();

    this.AuthProvider.afAuth.authState.subscribe(user => {
      if (user) {
        this.rootPage = EnumNavigationMain.TabsPage;
      } else {
        this.rootPage = EnumNavigationMain.LoginPage;
      }
    },
      () => {
        this.rootPage = EnumNavigationMain.LoginPage;
      });
  }
}
