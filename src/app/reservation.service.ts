import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Reservation } from './reservation';

@Injectable()

export class ReservationService {
  private reservationsUrl = 'api/reservations';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getReservations(): Promise<Reservation[]> {
    return this.http.get(this.reservationsUrl)
               .toPromise()
               .then(res => res.json().data as Reservation[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  /**
  getReservation(id: number): Promise<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Reservation)
      .catch(this.handleError);
  }

  create(name: string): Promise<Reservation> {
    return this.http
      .post(this.reservationsUrl, JSON.stringify({name: name}),
      {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Reservation)
      .catch(this.handleError);
  }

  update(hero: Reservation): Promise<Reservation> {
    const url = `${this.reservationsUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  } */

}