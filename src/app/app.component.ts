import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserInfoProvider } from '../providers/user-info';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'LoginPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    events: Events,
    userProvider: UserInfoProvider,
  ) {
    platform.ready().then(() => {
      userProvider.getUserData()
      events.subscribe('user:signin', () => this.nav.setRoot('HomePage'))
      events.subscribe('user:signout', () => this.nav.setRoot('LoginPage'))

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
