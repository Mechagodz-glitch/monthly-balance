import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Button } from 'protractor';
import { LocalStorageService } from '../service/local-storage.service';


export interface MonthsView {
  name: string;
  month: string;
  amount: string;
}

@Component({
  selector: 'app-by-month-view',
  templateUrl: './by-month-view.component.html',
  styleUrls: ['./by-month-view.component.scss'],
})
export class ByMonthViewComponent implements OnInit {

  monthsData: MonthsView[] = [];

  dataSource: MonthsView[] = [];

  displayedColumns: string[] = ['name', 'month', 'amount'];

  openingBalance: number = 0;

  closingBalance: number = 0;

  months = new FormControl();
  monthsList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  expenditureByMonth: string = '';

 
  constructor(private localStorage: LocalStorageService) { }

  ngOnInit() {
    
    this.monthsData = this.localStorage.getAllData().map(JSON.parse);
    // console.log(this.monthsData)
  }

  byMonthData(month: any) {
    if(month == 1) {
      this.dataSource = this.monthsData.filter(item => item.month == "January")
    }else if(month == 2) {
      this.dataSource = this.monthsData.filter(item => item.month == "February")
    }else if(month == 3) {
      this.dataSource = this.monthsData.filter(item => item.month == "March")
    }else if(month == 4) {
      this.dataSource = this.monthsData.filter(item => item.month == "April")
    }else if(month == 5) {
      this.dataSource = this.monthsData.filter(item => item.month == "May")
    }else if(month == 6) {
      this.dataSource = this.monthsData.filter(item => item.month == "June")
    }else if(month == 7) {
      this.dataSource = this.monthsData.filter(item => item.month == "July")
    }else if(month == 8) {
      this.dataSource = this.monthsData.filter(item => item.month == "August")
    }else if(month == 9) {
      this.dataSource = this.monthsData.filter(item => item.month == "September")
    }else if(month == 10) {
      this.dataSource = this.monthsData.filter(item => item.month == "October")
    }else if(month == 11) {
      this.dataSource = this.monthsData.filter(item => item.month == "November")
    }else if(month == 12) {
      this.dataSource = this.monthsData.filter(item => item.month == "December")
    }
  }

}
