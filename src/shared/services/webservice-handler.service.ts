import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class WebserviceHandlerService {

  constructor( private httpClient: HttpClient) { }

  post(url, request = {}) {
    return this.httpClient.post(environment.API_URL + url, request);
  }

  get(url, request = {}) {
    return this.httpClient.get(environment.API_URL + url, request);
  }
}
