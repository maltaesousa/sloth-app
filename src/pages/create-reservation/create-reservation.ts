import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';

@Component({
  selector: 'create-reservation',
  templateUrl: 'create-reservation.html'
})
export class CreateReservationPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reservationService: ReservationService) {}

  reservation = new Reservation(0, '');
}
