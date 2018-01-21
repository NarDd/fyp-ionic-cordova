import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { PastPage } from '../pages/past/past';
import { EventPage } from '../pages/event/event';
import { AttendancePage } from '../pages/attendance/attendance';
import { MyeventPage } from '../pages/myevent/myevent';
import { AttendancelistPage } from '../pages/attendancelist/attendancelist';
import { EventdatesPage } from '../pages/eventdates/eventdates';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BLE } from '@ionic-native/ble';
import { ToastController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    UpcomingPage,
    PastPage,
    EventPage,
    MyeventPage,
    EventdatesPage,
    AttendancePage,
    AttendancelistPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    UpcomingPage,
    PastPage,
    EventPage,
    MyeventPage,
    EventdatesPage,
    AttendancePage,
    AttendancelistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ToastController,
    BLE,
    RestProvider,
    Storage
  ]
})
export class AppModule {}
