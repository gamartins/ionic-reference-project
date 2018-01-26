import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

import { HttpFactory } from '../util/HttpFactory';

import { environment } from '../environment/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ExampleProvider {

  private apiUrl: string = environment.apiUrl
  private apiToken: string = ''
  private routeUsers: string = 'users'

  constructor(public http: HttpClient) {}

  private getAuthenticatedRequestOption() {
    const requestOptions = HttpFactory.getRequestOptions({
      'Authorization': `Bearer ${this.apiToken}`
    })

    return requestOptions
  }

  private createRequest(url: string, method: string, body?) {
    const headers = this.getAuthenticatedRequestOption()
    let request: Observable<HttpEvent<any>> = null
    
    // Get the full response
    // headers['observe'] = 'response'

    switch (method) {
      case 'get':
        request = this.http.get<any>(url, headers)
        request = this.http.get<any>(url, headers)
        break

      case 'post':
        request = this.http.post<any>(url, body, headers)
        break

      case 'put':
        request = this.http.put<any>(url, body, headers)
        break
      
      case 'delete':
        request = this.http.delete<any>(url, headers)
        break
    
      default:
        request = null
        break
    }
    
    const promise = new Promise((resolve, reject) => {
      request.subscribe(
        data => resolve(data),
        error => reject(error)
      )
    })

    return promise
  }

  public getRequest() {
    const promise = this.createRequest(this.apiUrl + this.routeUsers, 'get')

    return promise
  }

  public postRequest(user) {
    // Using x-www-form...
    // const userParams = new HttpParams().set('id', '3')
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
