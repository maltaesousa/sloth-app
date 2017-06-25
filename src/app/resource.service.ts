import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()

export class ResourceService {
  private resourcesUrl = 'http://localhost:8100/api/resources';
  //private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

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
