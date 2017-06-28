import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()

export class UserService {
  constructor(
    private http: Http,
    @Inject('APIUrl') private APIUrl:string
  ) {}

  private usersUrl = this.APIUrl + '/users';

  getResources(): Promise<any> {
    return this.http.get(this.usersUrl)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
