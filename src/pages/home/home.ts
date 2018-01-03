import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginProvider } from '../../providers/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  constructor(public navCtrl: NavController, private loginProvider: LoginProvider) {

  }

  logout() {
    this.loginProvider.signout()
    this.navCtrl.setRoot('LoginPage')
  }

}
