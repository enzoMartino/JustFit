import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { AngularFireAuth } from 'angularfire2/auth';

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
    AngularFireAuth
  ],
  exports: [
    SignupPage
  ]
})
export class SignupPageModule { }
