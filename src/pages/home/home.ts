import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as moment from 'moment';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';

import { CreateReservationPage } from '../create-reservation/create-reservation';

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
    console.log(moment().format());
    this.getReservations();
  }

  openPage() {
    this.navCtrl.push(CreateReservationPage);
  }

}
