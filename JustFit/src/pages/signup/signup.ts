
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator.provider';
import { EnumNavigationMain } from '../../models/enum.navigation.main';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  
  signupError: string;
  signUpForm: FormGroup;

  constructor(
    private readonly navCtrl: NavController,
    private readonly authProvider: AuthProvider,
    private readonly formsValidatorProvider: FormsValidatorProvider
  ) {
    this.initializeFormValidators();
  }

  initializeFormValidators() {
    this.signUpForm = this.formsValidatorProvider.retrieveSignUpFormValidator();
  }

  signup() {
    let data = this.signUpForm.value;
    let credentials = {
      email: data.email,
      password: data.password
    };
    this.authProvider.signUp(credentials).then(
      () => this.navCtrl.setRoot(EnumNavigationMain.TabsPage),
      error => this.signupError = error.message
    );
  }
  
}