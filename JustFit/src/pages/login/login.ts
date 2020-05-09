import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider/auth.provider'
import { FormGroup } from '@angular/forms';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';
import { AlertProvider } from '../../providers/alert/alert.provider';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginError: string;

  constructor(
    private readonly navCtrl: NavController,
    private readonly authProvider: AuthProvider,
    private readonly formsValidatorProvider: FormsValidatorProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.initializeLoginPage();
  }

  initializeLoginPage() {
    this.loginForm = this.formsValidatorProvider.retrieveEmailAndPasswordFormValidator();
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.authProvider.signInWithEmail(credentials)
      .then(() => this.navCtrl.setRoot(EnumNavigationMain.TabsPage),
        error => this.loginError = error.message
      );
  }

  signup() {
    this.navCtrl.push(EnumNavigationMain.SignupPage);
  }

  async loginWithGoogle() {
    try {
      await this.authProvider.signInWithGoogle();
      this.navCtrl.setRoot(EnumNavigationMain.TabsPage);
    } catch (error) {
      this.alertProvider.presentErrorAlert(error.message);
    }
  }

}
