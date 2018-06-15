import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpFactory } from '../util/HttpFactory';

import { environmentVars } from '../environment/environment';

@Injectable()
export class ExampleProvider {

  private apiUrl: string = environmentVars.apiUrl
  private routeUsers: string = 'users'
  private httpFactory: HttpFactory

  constructor(private http: HttpClient) {
    this.httpFactory = new HttpFactory(this.http)
  }

  public getRequest() {
    const route = `${this.apiUrl}/${this.routeUsers}`
    const promise = this.httpFactory.createRequest(route, 'get')

    return promise
  }

  public getRequestById(id) {
    const route = `${this.apiUrl}/${this.routeUsers}/${id}`
    const promise = this.httpFactory.createRequest(route, 'get')

    return promise
  }

  public postRequest(user) {
    // Using x-www-form...
    // const userParams = new HttpParams().set('id', '3')
    const route = `${this.apiUrl}/${this.routeUsers}`
    const userJSON = JSON.stringify(user)
    const promise = this.httpFactory.createRequest(route, 'post', userJSON)

    return promise
  }

  public putRequest(userID, user) {
    const route = `${this.apiUrl}/${this.routeUsers}/${userID}`
    const userJSON = JSON.stringify(user)
    const promise = this.httpFactory.createRequest(route, 'put', userJSON)

    return promise
  }

  public deleteRequest(userID) {
    const route = `${this.apiUrl}/${this.routeUsers}/${userID}`
    const promise = this.httpFactory.createRequest(route, 'delete')

    return promise
  }

}
