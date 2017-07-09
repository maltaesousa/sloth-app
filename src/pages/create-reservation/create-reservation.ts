import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as moment from 'moment';

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

  reservation = {
    user_id: 1,
    resource_id: 0,
    name: '',
    begin: new Date().toISOString(),
    end: new Date(moment().add(4, 'hours').toDate()).toISOString()
  };

  resources: any;
  now: Date = new Date();
  min = moment(this.now).subtract(5, 'years').toDate();
  max = moment(this.now).add(5, 'years').toDate();

  getResources(): void {
    this.resourceService.getResources()
      .then(res => this.resources = res);
  }

  createReservation(): void {
    this.reservationService.create(this.reservation)
      .then(res => this.navCtrl.pop().then(
        () => this.navParams.get('resolve')(res)
      ));
  }

  ngOnInit(): void {
    this.getResources();
    console.log(this.reservation);
  }
}
