import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ReservationService } from './reservation.service';
import { ResourceService } from './resource.service';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CreateReservationPage } from '../pages/create-reservation/create-reservation';
import { ShowPage } from '../pages/show/show';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ProfilePage,
    CreateReservationPage,
    ShowPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ProfilePage,
    CreateReservationPage,
    ShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ReservationService,
    ResourceService,
    UserService
  ]
})
export class AppModule {}
