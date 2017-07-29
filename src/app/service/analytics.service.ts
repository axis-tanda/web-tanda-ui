import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AnalyticsService {

  constructor(private http: Http) { }

  getPeopleCountFromRoom() {
    return this.http.get('http://localhost:8001/api/tanda/room/all');
  }

}
