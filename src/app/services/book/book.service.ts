import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  public getListBook(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-books';
    return this.http.get(url);
  }

  public getListBookPartly(): Observable<any> {
    const url = 'http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-books-partly';
    return this.http.get(url);
  }

  public submitEmail(body: any): Observable<any> {
    const params = new HttpParams()
      .set('bookId', body.bookId)
      .set('clientName', body.clientName)
      .set('clientEmail', body.clientEmail)
      .set('clientNumber', body.clientNumber);

    return this.http.post('http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/send-email', params);
  }
  
  public getDetailBook(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('bookId', body.bookId);
    return this.http.get('http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-detailed-book', { params: params });
  }

  saveEmailData(userData: any) {
    sessionStorage.setItem('detail-book', JSON.stringify(userData))
  }

  public previewImage(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('bookId', body.bookId);
    return this.http.get('http://54.251.83.205:9091/api/technobanker/v1/backoffice/book/get-detailed-book/book-preview', { params: params });
  }

}
