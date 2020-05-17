import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore, FirestoreSettingsToken } from 'angularfire2/firestore';
import { firebaseConfig } from '../models/firebase.config';
import { AngularFireAuth } from 'angularfire2/auth';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ProvidersModule } from '../providers/providers.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    ProvidersModule,
    RepositoriesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: FirestoreSettingsToken, useValue: {} },
    AngularFireAuth
  ]
})
export class AppModule { }
