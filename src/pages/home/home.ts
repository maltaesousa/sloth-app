import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    private reservationService: ReservationService) { }

  reservations: Reservation[];
  filter: string;

  getReservations(): void {
    this.reservationService.getReservations().then(res => this.reservations = res);
  }

  ngOnInit(): void {
    this.getReservations();
  }

}
