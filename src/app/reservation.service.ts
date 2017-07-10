import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import * as _ from 'lodash';

import { Reservation } from './reservation';
import { AuthService } from './auth.service';

@Injectable()

/**
 * This service provides access to reservations
 */
export class ReservationService {
  constructor(
    private http: Http,
    private authService: AuthService
  ) {}

  private reservationsUrl = this.authService.getUrl() + '/reservations';
  private headers = new Headers({'Content-Type': 'application/json'});
  // array of dates that need to be changed to ISO String:
  private dateKeys = ['begin', 'end', 'created_at', 'updated_at'];

  /**
   * Get all the reservations
   */
  getReservations(): Promise<Reservation[]> {
    return this.http.get(this.reservationsUrl)
      .toPromise()
      .then(res => res.json().map(
        (element) => this.stringifyDates(element)
      ) as Reservation[])
      .catch(this.handleError);
  }

  /**
   * TODO: handle errors gracefully
   * @param error 
   */
  private handleError(error: any): Promise<any> {
    console.error('Error Reservation Service', error);
    return Promise.reject(error.message || error);
  }

  /**
   * POST on api/reservations
   * @param reservation 
   */
  create(reservation: any): Promise<Reservation> {
    return this.http
      .post(this.reservationsUrl, reservation,
      {headers: this.headers})
      .toPromise()
      .then(res => this.stringifyDates(res.json()) as Reservation)
      .catch(this.handleError);
  }

  /**
   * Get a single reservation
   * @param id
   */
  getReservation(id: number): Promise<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => this.stringifyDates(res.json()) as Reservation)
      .catch(this.handleError);
  }

  /**
   * Formats the date recieved from API to ISO string
   * @param reservation 
   */
  stringifyDates(reservation: any): Reservation {
    _.forOwn(reservation, (v, k) => {
      if (this.dateKeys.indexOf(k) > -1) {
        reservation[k] = moment(v).toISOString();
      }
    });
    return reservation;
  }
/**
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