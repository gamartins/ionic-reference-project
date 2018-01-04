import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpFactory } from '../util/HttpFactory';

import { environment } from '../environment/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExampleProvider {

  private apiUrl: string = environment.apiUrl
  private apiToken: string = ''
  private routeAuth: string = 'auth'
  private routeUsers: string = 'users'

  constructor(public http: Http) {}

  private getAuthenticatedRequestOption() {
    const requestOptions = HttpFactory.getRequestOptions({
      'Authorization': `Bearer ${this.apiToken}`
    })

    return requestOptions
  }

  private createRequest(url: string, method: string, body?) {
    const requestOptions = this.getAuthenticatedRequestOption()
    let request: Observable<Response> = null

    switch (method) {
      case 'get':
        request = this.http.get(url, requestOptions)
        break

      case 'post':
        request = this.http.post(url, body, requestOptions)
        break

      case 'put':
        request = this.http.put(url, body, requestOptions)
        break
      
      case 'delete':
        request = this.http.delete(url, requestOptions)
        break
    
      default:
        request = null
        break
    }
    
    const promise = new Promise((resolve, reject) => {
      request.subscribe(
        data => resolve(data.json()),
        error => reject(error)
      )
    })

    return promise
  }

  public signin(email, password) {
    const requestOptions = HttpFactory.getRequestOptions()
    
    const body = JSON.stringify({ email: email, password: password })
    // const body = new URLSearchParams()
    // body.append('email',email)
    // body.append('password',password)

    const promise = new Promise((resolve,reject) => {
      this.http.post(this.apiUrl + this.routeAuth, body, requestOptions)
      .map(res => {
        const data = res.json()
        this.apiToken = data.token
        return data
      })
      .subscribe(
        data => resolve(data),
        err => reject(err)
      )
    })

    return promise

  }

  public getRequest() {
    const promise = this.createRequest(this.apiUrl + this.routeUsers, 'get')

    return promise
  }

  public postRequest(user) {
    const userJSON = JSON.stringify(user)
    const promise = this.createRequest(this.apiUrl + this.routeUsers, 'post', userJSON)

    return promise
  }

  public putRequest(userID, user) {
    const route = `${this.routeUsers}/${userID}`
    const userJSON = JSON.stringify(user)
    const promise = this.createRequest(this.apiUrl + route, 'put', userJSON)

    return promise
  }

  public deleteRequest(userID) {
    const route = `${this.routeUsers}/${userID}`
    const promise = this.createRequest(this.apiUrl + route, 'delete')

    return promise
  }

}
