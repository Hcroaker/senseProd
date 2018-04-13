import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';
import { Deeplinks } from '@ionic-native/deeplinks';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { SplashPage } from '../pages/splash/splash';
import { WelcomePage } from '../pages/welcome/welcome';
import { SearchProvider } from '../providers/search/search';

import { AbsoluteDrag } from '../directives/absolute-drag/absolute-drag';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    SplashPage,
    WelcomePage,
    AbsoluteDrag
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    SplashPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchProvider
  ]
})
export class AppModule {}
