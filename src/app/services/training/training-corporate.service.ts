import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class TrainingCorporateService {

  constructor(
    private http: HttpClient
  ) { }

  public getListTrainingByStatus(status: string): Observable<any> {
    const params = new HttpParams()
    .set('trainingStatus', status);

    const url = `${API_BASE_URL}/api/technobanker/v1/backoffice/training/corporate/list-training`;
    return this.http.get(url, { params: params });
  }

}
