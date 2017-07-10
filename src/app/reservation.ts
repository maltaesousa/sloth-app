import * as moment from 'moment';

export class Reservation {

  constructor(
    public id: number,
    public name: string,
    public begin: string,
    public end: string
  ) {}

  public resource: any;
  public user: any;
}
