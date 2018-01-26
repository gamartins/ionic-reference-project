import { HttpHeaders } from "@angular/common/http";

export class HttpFactory {
    static getRequestOptions(params?) {
        const headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json')
        // headers.append('X-Requested-With', 'XMLHttpRequest')
        // headers.append('Content-Type', 'application/x-www-form-urlencoded')

        for(var property in params) {
            headers.append(property, params[property])
        }

        const options = { headers: headers }

        return options
    }
}
