import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

import { ReservationService } from '../../app/reservation.service';
import { ResourceService } from '../../app/resource.service';

@Component({
  selector: 'page-show',
  templateUrl: 'show.html'
})

export class ShowPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reservationService: ReservationService,
    private resourceService: ResourceService ) { }

  reservation: any;
  disabled = new Boolean(true);

  getReservation(): void {
    let id = this.navParams.get('id') as number;
    this.reservationService.getReservation(id)
      .then(res => this.reservation = {
        id: res.id,
        name: res.name,
        begin: moment(res.begin).toISOString(),
        end: moment(res.end).toISOString()
      });
  }

  modifyReservation() {
    console.log(this.reservation);
  }

  ngOnInit(): void {
    this.getReservation();
  }
}
