import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider/auth-provider'
import { FormGroup } from '@angular/forms';
import { SignupPage } from '../signup/signup';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

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
    private readonly AuthProvider: AuthProvider,
    private readonly FormsValidatorProvider: FormsValidatorProvider
  ) {
    this.initializeLoginPage();
  }

  initializeLoginPage() {
    this.loginForm = this.FormsValidatorProvider.retrieveEmailAndPasswordFormValidator();
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
    this.AuthProvider.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot(EnumNavigationMain.TabsPage),
        error => this.loginError = error.message
      );
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
    this.AuthProvider.signInWithGoogle().then(
      () => this.navCtrl.setRoot(EnumNavigationMain.TabsPage),
      error => console.log(error.message)
    );
  }

}
