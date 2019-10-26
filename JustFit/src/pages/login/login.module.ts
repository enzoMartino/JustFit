import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AuthProvider } from '../../providers/auth-provider/auth.provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsValidatorProvider } from '../../providers/forms-validator/forms-validator.provider';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    NgxErrorsModule,
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    AuthProvider,
    AngularFireAuth,
    FormsValidatorProvider
  ]
})
export class LoginPageModule { }
