import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Category } from './models/category.model';
import { Biller } from './models/biller.model';
import { Payment } from './models/payment.model';
import { Bill } from './models/bill.model';

@Injectable()
export class RetrievalService {

  categoryString = "http://puzzle.digitalrep.com.au/category";
  billerString = "http://puzzle.digitalrep.com.au/biller";
  paymentString = "http://puzzle.digitalrep.com.au/payment";
  billString = "http://puzzle.digitalrep.com.au/bill";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer: ' + localStorage.getItem('token')
      })
    };
    return this.http.get<Category>(this.categoryString, httpOptions);
  }

  getBillers(): Observable<Biller> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer: ' + localStorage.getItem('token')
      })
    };
    return this.http.get<Biller>(this.billerString, httpOptions);
  }

  getBills(): Observable<Bill> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer: ' + localStorage.getItem('token')
      })
    };
    return this.http.get<Bill>(this.billString, httpOptions);
  }

  getPayments(): Observable<Payment> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Bearer: ' + localStorage.getItem('token')
      })
    };
    return this.http.get<Payment>(this.billerString, httpOptions);
  }

}
