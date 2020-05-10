import { PersonalTrainerFirebaseRepository } from './../repositories/personal.trainer/personal.trainer.firebase.repository';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth-provider/auth.provider';
import { EnumNavigationMain } from '../models/enum.navigation.main';
import { SessionProvider } from '../providers/session/session.provider';
import { AlertProvider } from '../providers/alert/alert.provider';

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
    private readonly sessionProvider: SessionProvider,
    private readonly personalTrainerFirebaseRepository: PersonalTrainerFirebaseRepository,
    private readonly alertProvider: AlertProvider
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    this.platform.ready()
      .then(() => {
        this.statusBar.styleDefault();
        this.AuthProvider.afAuth.authState.subscribe(async (user) => {
          try {
            if (user) {
              await this.handleExistingUser(user.uid);
              this.rootPage = EnumNavigationMain.TabsPage;
            } else {
              this.rootPage = EnumNavigationMain.LoginPage;
            }
          } catch (error) {
            this.rootPage = EnumNavigationMain.LoginPage;
            this.alertProvider.presentErrorAlert(error);
          }
          this.splashScreen.hide();
        },
          error => {
            console.log(error);
            this.rootPage = EnumNavigationMain.LoginPage;
            this.splashScreen.hide();
          });
      })
      .catch(error => {
        this.alertProvider.presentErrorAlert(error);
      });
  }

  private async handleExistingUser(userId: string) {
    const personalTrainer = await this.personalTrainerFirebaseRepository
      .retrievePersonalTrainerById(userId);
    this.sessionProvider.loggedPersonaltrainer = personalTrainer;
  }
}
