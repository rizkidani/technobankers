import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './../api.config';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  public getDetailEvent(eventId: any): Observable<any> {
    const url = `${API_BASE_URL}/api/technobanker/v1/backoffice/event/detail-event`;
    const params = new HttpParams()
    .set('eventId', eventId)

    return this.http.get(url, { params: params });
  }
}
