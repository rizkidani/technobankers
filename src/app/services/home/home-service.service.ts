import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  index = 0;

  constructor(
    private http: HttpClient
    ) { }

  public getSlider(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/technobanker/v1/backoffice/slider/get-slider-for-frontoffice';
    return this.http.get(url);
  }

 
}
