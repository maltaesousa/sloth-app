import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

import { Reservation } from '../../app/reservation';
import { ReservationService } from '../../app/reservation.service';
import { ResourceService } from '../../app/resource.service';

@Component({
  selector: 'create-reservation',
  templateUrl: 'create-reservation.html'
})
export class CreateReservationPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reservationService: ReservationService,
    private resourceService: ResourceService ) {}

  reservation = new Reservation(
    0,
    '',
    new Date(),
    new Date(moment().add(4, 'hours').toDate())
  );
  resources: any;
  now: Date = new Date();
  min = moment(this.now).subtract(5, 'years').toDate();
  max = moment(this.now).add(5, 'years').toDate();

  getResources() :void {
    this.resourceService.getResources()
      .then(res => this.resources = res);
  }

  ngOnInit(): void {
    this.getResources();
  }
}
