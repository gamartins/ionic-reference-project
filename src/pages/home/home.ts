import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ExampleProvider } from '../../providers/example';
import { ErrorChecker } from '../../util/ErrorChecker'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public exampleProvider: ExampleProvider) {
  }

  getFromAPI() {
    this.exampleProvider.getRequest()
    .then((data: any) => console.log(data))
    .catch(error => ErrorChecker.getErrorMessage(error, this.toastCtrl))
  }

  postFromAPI() {
    const user = {
      username: 'gamartins',
      email: 'gabriel@email.com',
      password: '123123'
    }

    this.exampleProvider.postRequest(user)
    .then((data: any) => console.log(data))
    .catch(error => ErrorChecker.getErrorMessage(error, this.toastCtrl))
  }

  putFromAPI() {
    const userID = 1
    const user = {
      name: 'Gabriel Angelo',
      email: 'gabriel@email.com',
      password: '123123'
    }

    this.exampleProvider.putRequest(userID, user)
    .then((data: any) => console.log(data))
    .catch(error => ErrorChecker.getErrorMessage(error, this.toastCtrl))
  }

  deleteFromAPI() {
    const userID = 1
    
    this.exampleProvider.deleteRequest(userID)
    .then((data: any) => console.log(data))
    .catch(error => ErrorChecker.getErrorMessage(error, this.toastCtrl))
  }

}
