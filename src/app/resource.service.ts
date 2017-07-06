import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthService } from './auth.service';

@Injectable()

export class ResourceService {
  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  private resourcesUrl = this.authService.getUrl() + '/resources';

  getResources(): Promise<any> {
    return this.http.get(this.resourcesUrl)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
