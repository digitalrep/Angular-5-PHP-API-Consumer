import { Component, OnInit } from '@angular/core';
import { RetrievalService } from '../retrieval.service';
import { Observable} from 'rxjs/Rx';
import { Category } from '../models/category.model';
import { Biller } from '../models/biller.model';
import { Bill } from '../models/bill.model';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private categories: Observable<Category[]>;
  private billers: Observable<Biller[]>;
  private payments: Observable<Payment[]>;
  private bills: Bill[];
  private bs: Bill[];

  constructor(private ret: RetrievalService) { }

  ngOnInit() {
    this.getCategories();
    this.getBillers();
    this.getBills();
  }

  getCategories(): void {
    this.ret.getCategories().subscribe(
      result => { 
        this.categories = result['categories'];
      }
    );
  }

  getBillers(): void {
    this.ret.getBillers().subscribe(
      result => { 
        this.billers = result['billers'];
      }
    );
  } 

  getBills(): void {
    this.ret.getBills().subscribe(
      result => { 
        this.sortByDate(result['bills']);
        this.test(result['bills']);
      }
    );
  } 

  getPayments(): void {
    this.ret.getPayments().subscribe(
      result => { 
        this.payments = result['payments'];
      }
    );
  } 

  test(bills: Bill[]) {
    this.bs = new Array();
    this.bs['blah'] = new Array();
    this.bs['blah2'] = new Array();
    this.bs['blah3'] = new Array();
    console.log(bills[0]);
    this.bs['blah'].push(bills[0]);
    this.bs['blah2'].push(bills[1]);
    this.bs['blah'].push(bills[2]);
    this.bs['blah3'].push(bills[3]);
    console.log(this.bs);
    console.log(this.bs[0]);
    console.log(this.bs['blah']);
  }

  sortByDate(bills: Bill[]) {
    this.bills = bills.sort(function(a, b) {
      // is a larger than b?
      let aYear = a.due.substr(a.due.length - 4);
      let bYear = b.due.substr(b.due.length - 4);
      let aMonth = a.due.substr(a.due.length - 7).substring(0, 2);
      let bMonth = b.due.substr(b.due.length - 7).substring(0, 2);
      let aDay = a.due.substring(0, 2);
      let bDay = b.due.substring(0, 2);

      if(aYear > bYear && aMonth > bMonth && aDay > bDay) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
