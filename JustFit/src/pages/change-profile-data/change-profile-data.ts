import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session.provider';
import { PersonalTrainerModel } from '../../models/personal.trainer.model';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator.provider';
import { FormGroup } from '@angular/forms';
import { AlertProvider } from '../../providers/alert/alert.provider';

@IonicPage()
@Component({
  selector: 'page-change-profile-data',
  templateUrl: 'change-profile-data.html',
})

export class ChangeProfileDataPage {

  user: PersonalTrainerModel;
  changeProfileDataFormWithPassword: FormGroup;
  name: string;
  surname: string;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly sessionProvider: SessionProvider,
    private readonly formsValidatorProvider: FormsValidatorProvider,
    private readonly alertProvider: AlertProvider
  ) {
    this.user = this.sessionProvider.loggedPersonaltrainer;
    this.name = this.user.name;
    this.surname = this.user.surname;
    this.email = this.user.email;
    this.initializeFormValidators();
  }

  initializeFormValidators() {
    this.changeProfileDataFormWithPassword = this.formsValidatorProvider
      .retrieveChangeProfileDataFormWithPasswordValidator()
  }

  saveProfileData() {
    try {
    } catch (error) {
      this.alertProvider.presentErrorAlert(error);
    }
  }

}
