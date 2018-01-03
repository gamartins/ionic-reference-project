import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfoProvider } from './user-info';

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient, private userInfo: UserInfoProvider) {
    console.log('Hello AuthProvider Provider');
  }

  public signup(email, password) {
    if(email == 'gabriel@email.com' && password == '123123') {
      this.userInfo.saveUserData({ token: 'SomeToken' })
      return Promise.resolve({ token: 'SomeToken' })
    }
    else
      return Promise.reject('Usuário inválido')
  }

  public signout() {
    this.userInfo.eraseUserData()
  }

}
