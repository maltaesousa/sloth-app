import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as moment from 'moment';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';
import { OnInit } from '@angular/core';

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
  filter: String = new Date().toISOString();

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
