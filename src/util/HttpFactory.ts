import { HttpHeaders, HttpClient, HttpEvent } from "@angular/common/http";

import { environmentVars } from "../environment/environment";

import { Observable } from "rxjs/Observable";

export class HttpFactory {
  
  private apiToken: string = environmentVars.apiToken
  
  constructor(public http: HttpClient) {

  }

  private getRequestOptions(params?) {
    let headers = new HttpHeaders()
    headers = headers.set('Content-Type', 'application/json')
    // headers.append('X-Requested-With', 'XMLHttpRequest')
    // headers.append('Content-Type', 'application/x-www-form-urlencoded')

    for (var property in params) {
      headers = headers.set(property, params[property])
    }

    const options = { headers: headers }

    return options
  }

  private getAuthenticatedRequestOption() {
    const requestOptions = this.getRequestOptions({
      'Authorization': `Bearer ${this.apiToken}`
    })

    return requestOptions
  }

  public createRequest(url: string, method: string, body?) {
    const headers = this.getAuthenticatedRequestOption()
    let request: Observable<HttpEvent<any>> = null
    
    // Get the full response
    // headers['observe'] = 'response'

    switch (method) {
      case 'get':
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
}
