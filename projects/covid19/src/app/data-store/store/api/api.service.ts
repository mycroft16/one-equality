import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiOptions } from '../../interfaces/api.interface';
import { AppState } from '../app.store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';

@Injectable()
export class ApiService {
    private apiVersion: string = 'v1';

    constructor(protected readonly http: HttpClient, protected readonly store: Store<AppState>) { }

    public get<T>(controller: string, options: ApiOptions = {}): Observable<T> {
        return this.call<T>('GET', controller, options);
    }

    public post<T>(controller: string, options: ApiOptions = {}): Observable<T> {
        return this.call<T>('POST', controller, options);
    }

    public put<T>(controller: string, options: ApiOptions = {}): Observable<T> {
        return this.call<T>('PUT', controller, options);
    }

    public delete<T>(controller: string, options: ApiOptions = {}): Observable<T> {
        return this.call<T>('DELETE', controller, options);
    }

    //// END PUBLIC INTERFACE

    private call<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', controller: string, options: ApiOptions): Observable<T> {
        const selectedOptions: ApiOptions = this.combineDefaultOptionsWith(options);
        const requestOptions = {
            params: selectedOptions.params,
            body: selectedOptions.body,
            headers: selectedOptions.headers
        };

        return this.http.request<T>(method, this.urlFor(controller), requestOptions);
    }

    private combineDefaultOptionsWith(options: ApiOptions): ApiOptions {
        return { params: {}, body: null, headers: this.headers(options.headerType), ...options };
    }

    private urlFor(controller: string) {
        return `https://covidtracking.com/api/${this.apiVersion}/${controller}.json`;
    }

    private headers(headerType: string = 'json'): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');

        switch (headerType) {
        case 'json':
            headers = headers.set('Content-Type', 'application/json');
            headers = headers.set('Accept', 'application/json');
            break;
        case 'download':
            headers = headers.set('Accept', 'application/octet-stream');
            break;
        case 'form-urlencoded':
            headers = headers.set('Accept', 'application/json');
            headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
            break;
        case 'text':
            headers = headers.set('Content-Type', 'text/plain');
            break;
        default:
            headers = headers.set('Accept', 'application/json');
            break;
        }

        return headers;
    }
}
