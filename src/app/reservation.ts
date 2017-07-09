import * as moment from 'moment';

export class Reservation {

  constructor(
    public id: number,
    public name: string,
    public begin: Date,
    public end: Date
  ) {}

  public beginISO: string;
  public endISO: string;
  public resource: any;
  public user: any;

  setISODates(): void {
    this.beginISO = moment(this.begin).toISOString();
    this.endISO = moment(this.end).toISOString();
  }
}
