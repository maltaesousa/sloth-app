import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as moment from 'moment';
import * as _ from 'lodash';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';

import { CreateReservationPage } from '../create-reservation/create-reservation';
import { ShowPage } from '../show/show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    private reservationService: ReservationService) { }

  reservations: Reservation[];
  resources: any;
  filter: String = new Date().toISOString();
  now: Date = new Date();
  min = moment(this.now).subtract(5, 'years').toDate();
  max = moment(this.now).add(5, 'years').toDate();

  getReservations(): void {
    this.reservationService.getReservations()
      .then(res => this.reservations = res);
  }

  ngOnInit(): void {
    this.getReservations();
  }

  /**
   * Opens create page as a Promise, waiting for the new data
   */
  newReservation(): void {
    new Promise((resolve, reject) => {
      this.navCtrl.push(CreateReservationPage, {resolve: resolve});
    }).then(data => {
      this.reservations.push(data as Reservation);
      console.log(this.reservations);
      // TODO: Not working!
      _.orderBy(this.reservations, 'begin');
    });
  }

  /**
   * show details
   */
  showReservation(reservation: any): void {
    this.navCtrl.push(ShowPage, {
      id: reservation.id
    });
  }

}
