import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './../api.config';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  index = 0;

  constructor(
    private http: HttpClient
    ) { }

  public getSlider(): Observable<any> {
    const url = `${API_BASE_URL}/api/technobanker/v1/backoffice/slider/get-slider-for-frontoffice`;
    return this.http.get(url);
  }

 
}
