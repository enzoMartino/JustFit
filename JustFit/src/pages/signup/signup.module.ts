import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    NgxErrorsModule,
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    AuthProvider,
    AngularFireAuth,
    FormsValidatorProvider
  ]
})
export class SignupPageModule { }