import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  saveRegisterData(userData: any) {
    sessionStorage.setItem('register', JSON.stringify(userData))
  }

  public registerUser(body: any): Observable<any> {
    const params = new HttpParams()
      .set('userFirstName', body.userFirstName)
      .set('userLastName', body.userLastName)
      .set('userEmail', body.userEmail)
      .set('userPhone', body.userPhone)
      .set('userPassword', body.userPassword)

    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/user/register`, params);
  }

  saveUserData(userData: any) {
    localStorage.setItem('login', JSON.stringify(userData))
  }

  isLogin() {
    const loginData = localStorage.getItem('login')
    return loginData !== null;
  }

  loadUserData() {
    const loginData = localStorage.getItem('login')
    return JSON.parse(loginData ? loginData : '');
  }

  public loginUser(body: any): Observable<any> {
    const params = new HttpParams()
      .set('userEmail', body.userEmail)
      .set('userPassword', body.userPassword)

    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/user/login`, params);
  }
}
