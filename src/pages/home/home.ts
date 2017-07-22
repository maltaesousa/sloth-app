import { Component } from '@angular/core';
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
  filter: String = new Date().toISOString();
  min = moment().subtract(2, 'years').toISOString();
  max = moment().add(3, 'years').toISOString();

  /**
   * Gets reservations
   */
  getReservations(): void {
    this.reservationService.getReservations()
      .then(res => this.reservations = res);
  }

  /**
   * Opens create page as a Promise, waiting for the new data
   * The adds it sorting all by begin date.
   */
  newReservation(): void {
    new Promise((resolve, reject) => {
      this.navCtrl.push(CreateReservationPage, {resolve: resolve});
    }).then(data => {
      this.reservations.push(data as Reservation);
      this.reservations = _.sortBy(this.reservations, 'begin');
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

  condition(res: any, i: number): boolean {
    var ress = this.reservations;
    if (i > 0) {
      if (moment(ress[i].begin).day() == moment(ress[i-1].begin).day()) {
        console.log(moment(ress[i].begin).day());
        return true;
      }
      return false;
    }
    return false;
  }

  ngOnInit(): void {
    this.getReservations();
  }
}
