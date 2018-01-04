import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExampleProvider } from '../../providers/example';
import { ErrorChecker } from '../../util/ErrorChecker'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public exampleProvider: ExampleProvider) {
  }
  
  login() {
    this.exampleProvider.signin('gabriel@email.com', '123123')
    .then(data => console.log('Usuário logado com sucesso'))
    .catch(error => console.log(ErrorChecker.getErrorMessage(error)))
  }

  getFromAPI() {
    this.exampleProvider.getRequest()
    .then((data: any) => console.log(data.users))
    .catch(error => console.log(ErrorChecker.getErrorMessage(error)))
  }

  postFromAPI() {
    const user = {
      name: 'Gabriel Angelo',
      email: 'gabriel@email.com',
      password: '123123'
    }

    this.exampleProvider.postRequest(user)
    .then((data: any) => console.log(data))
    .catch(error => console.log(ErrorChecker.getErrorMessage(error)))
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
    .catch(error => console.log(ErrorChecker.getErrorMessage(error)))
  }

  deleteFromAPI() {
    const userID = 1
    
    this.exampleProvider.deleteRequest(userID)
    .then((data: any) => console.log(data))
    .catch(error => console.log(ErrorChecker.getErrorMessage(error)))
  }

}
