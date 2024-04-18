import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './../api.config';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  index = 0;

  constructor(
    private http: HttpClient
  ) { }

  public setIndex(index: number) {
    this.index = index;
  }

  public getIndex() {
    return this.index;
  }

  public getListBook(): Observable<any> {
    const url = `${API_BASE_URL}/api/technobanker/v1/backoffice/book/get-books`;
    return this.http.get(url);
  }

  public getListBookPartly(): Observable<any> {
    const url = `${API_BASE_URL}/api/technobanker/v1/backoffice/book/get-books-partly`;
    return this.http.get(url);
  }

  public submitEmail(body: any): Observable<any> {
    const params = new HttpParams()
      .set('bookId', body.bookId)
      .set('clientName', body.clientName)
      .set('clientEmail', body.clientEmail)
      .set('clientNumber', body.clientNumber);

    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/send-email`, params);
  }

  public addReview(body:any): Observable<any> {
    const params = new HttpParams()
    .set('bookId', body.bookId)
    .set('bookReviewName', body.bookReviewName)
    .set('bookReviewEmail', body.bookReviewEmail)
    .set('bookReviewRating', body.bookReviewRating)
    .set('bookReviewText', body.bookReviewText);

    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/get-detailed-book/add-review`, params)
  }
  
  public getDetailBook(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('bookId', body.bookId);
    return this.http.get(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/get-detailed-book`, { params: params });
  }

  saveEmailData(userData: any) {
    sessionStorage.setItem('detail-book', JSON.stringify(userData))
  }

  public previewImage(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('bookId', body.bookId);
    return this.http.get(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/get-detailed-book/book-preview`, { params: params });
  }

  public updateViewCount(body: any): Observable<any>{
    const formData = new FormData();
    formData.append("bookId", body.bookId)
    return this.http.patch(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/count-views`, formData);
  }

  public getDetailBookTransaction(bookTransactionId: number): Observable<any> {
    const params = new HttpParams()
    .set('bookTransactionId', bookTransactionId);

    return this.http.get(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/detail-book-transaction`, { params: params })
  }

  public checkOutBook(body:any): Observable<any> {
    const params = new HttpParams()
    .set('userId', body.userId)
    .set('bookId', body.bookId)
    .set('bookQuantity', body.bookQuantity);

    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/book-checkout`, params)
  }

  public checkOutBookShipping(bookTransactionId: any, body:any): Observable<any> {
    const params = new HttpParams()
    .set('bookTransactionId', bookTransactionId)
    .set('bookReceiptName', body.bookReceiptName)
    .set('bookReceiptPhone', body.bookReceiptPhone)
    .set('bookReceiptEmail', body.bookReceiptEmail)
    .set('bookShippingLabel', body.bookShippingLabel)
    .set('bookShippingAddress', body.bookShippingAddress)
    .set('bookShippingCountry', body.bookShippingCountry)
    .set('bookShippingProvince', body.bookShippingProvince)
    .set('bookShippingCity', body.bookShippingCity)
    .set('bookShippingSubdistrict', body.bookShippingSubdistrict)
    .set('bookShippingVillage', body.bookShippingVillage)
    .set('bookShippingPostalcode', body.bookShippingPostalcode);

    return this.http.patch(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/book-checkout-shipping`, params)
  }

  public checkoutBookTransacion(body:any): Observable<any> {
    return this.http.post(`${API_BASE_URL}/api/technobanker/v1/backoffice/transaction/payment/cc`, body)
  }

  public checkOutBookPaymentMethod(bookTransactionId: any, bookTransactionPaymentCountry: string, body:any): Observable<any> {
    const params = new HttpParams()
    .set('bookTransactionId', bookTransactionId)
    .set('bookTransactionPaymentCountry', bookTransactionPaymentCountry)
    .set('bookTransactionPaymentMethod', body.bookTransactionPaymentMethod);
    return this.http.patch(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/book-checkout-payment-method`, params)
  }

  public getEBook(body: any): Observable<unknown> {
    const params = new HttpParams()
      .set('userId', body.userId);
    return this.http.get(`${API_BASE_URL}/api/technobanker/v1/backoffice/book/book-user`, { params: params });
  }

  public getShippingAllCountries(): Observable<unknown> {
    return this.http.get(`${API_BASE_URL}/api/technobanker/v1/backoffice/transaction/countries`);
  }

}