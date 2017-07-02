import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()

export class AuthService {
  constructor(
    private http: Http,
  ) {}

  private serverURL: string;

  setUrl(url: string): void {
    this.serverURL = url;
  }

  getUrl(): string {
    return this.serverURL;
  }

  login(username: string, password: string): void {
    //TODO: login
    console.log(username, password);
  }

}
