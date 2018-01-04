import { Headers, RequestOptions, URLSearchParams} from '@angular/http';

export class HttpFactory {
    static getRequestOptions(params?) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        // headers.append('X-Requested-With', 'XMLHttpRequest')
        // headers.append('Content-Type', 'application/x-www-form-urlencoded')

        for(var property in params) {
            headers.append(property, params[property])
        }

        let options = new RequestOptions({ headers: headers })

        return options
    }
}
