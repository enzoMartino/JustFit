
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@Component({
  selector: 'as-page-signup',
  templateUrl: './signup.html'
})
export class SignupPage {
  signupError: string;
  signUpForm: FormGroup;

  constructor(
    private readonly navCtrl: NavController,
    private readonly AuthProvider: AuthProvider,
    private readonly FormsValidatorProvider: FormsValidatorProvider
  ) {
    this.initializeSignUpPage();
  }

  initializeSignUpPage() {
    this.signUpForm = this.FormsValidatorProvider.retrieveEmailAndPasswordFormValidator();
  }

  signup() {
    let data = this.signUpForm.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.AuthProvider.signUp(credentials).then(
      () => this.navCtrl.setRoot(EnumNavigationMain.TabsPage),
      error => this.signupError = error.message
    );
  }
}