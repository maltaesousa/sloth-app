import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'create-reservation',
  templateUrl: 'create-reservation.html'
})
export class CreateReservationPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}
