import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, UntypedFormControl } from '@angular/forms';
import { LocalStorageService } from '../service/local-storage.service';
import { Observable } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';

export interface MemberDetails {
  name: string;
  month: string;
  amount: string;
}


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent implements OnInit {



  title = 'balanceApp';

  totalMembers: number = 0;

  postData = { "name": "", "month": "", "amount": "" };

  months = new FormControl();
  myControl = new FormControl();
  options: MemberDetails[] = [];
  filteredOptions: Observable<MemberDetails[]>;

  currentDate: any = ""

  memberName: string = '';

  amountValue: string = '';

  membersList: string[] = [];

  monthsList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  displayedColumns: string[] = ['name', 'month', 'amount', 'edit'];
  dataSource: MemberDetails[] = [];

  constructor(private localStorage: LocalStorageService) {

  }

  ngOnInit() {
    // console.log(currentDate)
    this.checkCurrentMonth();
    this.options = this.localStorage.getAllData().map(JSON.parse);
    // console.log(this.options)
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );

    this.getAllUsers();
    this.totalMembers = this.dataSource.length;
  }

  displayFn(user?: MemberDetails): string | undefined {
    return user ? user.name : undefined;
  }

  // //starting month
  // setMonth(event: string) {
  //   if(event == "startMonth") {
  //     this.localStorage.setItem("Current-Month", this.months.value);
  //     this.months.disable();
  //   } else if(event == "endMonth") { 
  //     this.localStorage.removeItem('Current-Month')
  //     this.months.enable();
  //   }
  // }

  checkCurrentMonth() {
     this.currentDate = (new Date().getMonth() + 1).toString();
    if (this.currentDate == "1") {
      this.months.setValue("January")
      this.months.disable();
    } else if (this.currentDate == "2") {
      this.months.setValue("February")
      this.months.disable();
    } else if (this.currentDate == "3") {
      this.months.setValue("March")
      this.months.disable();
    } else if (this.currentDate == "4") {
      this.months.setValue("April")
      this.months.disable();
    } else if (this.currentDate == "5") {
      this.months.setValue("May")
      this.months.disable();
    } else if (this.currentDate == "6") {
      this.months.setValue("June")
      this.months.disable();
    } else if (this.currentDate == "7") {
      this.months.setValue("July")
      this.months.disable();
    } else if (this.currentDate == "8") {
      this.months.setValue("August")
      this.months.disable();
    } else if (this.currentDate == "9") {
      this.months.setValue("September")
      this.months.disable();
    } else if (this.currentDate == "10") {
      this.months.setValue("October")
      this.months.disable();
    } else if (this.currentDate == "11") {
      this.months.setValue("November")
      this.months.disable();
    } else if (this.currentDate == "12") {
      this.months.setValue("December")
      this.months.disable();
    }
  }

  private _filter(value: string): MemberDetails[] {
    // console.log(value)
    const filterValue = value;
    // console.log(this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0))
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  clearForm() {
    this.myControl.reset();
    this.amountValue = '';
    this.months.reset();
    this.checkCurrentMonth();
  }

  submitData() {
    this.membersList.push(this.myControl.value)
    console.log(this.membersList);
    this.postData["name"] = this.myControl.value
    this.postData["month"] = this.months.value
    this.postData["amount"] = this.amountValue

    console.log(this.myControl.value)

    localStorage.setItem(this.postData["name"] + " - " + this.postData["month"], JSON.stringify(this.postData));
    this.getAllUsers();
    this.totalMembers = this.dataSource.length;
  }

  getAllUsers() {
    this.dataSource = this.localStorage.getAllData().map(JSON.parse);
  }

  removeRow(name: string, month: string) {
    if (window.confirm('Confirm Deletion of Selected Record')) {
      localStorage.removeItem(name + " - " + month);
      this.dataSource = this.dataSource.filter((u) => u.name !== name);
      this.getAllUsers();
      this.totalMembers = this.dataSource.length;
    } else {
      this.getAllUsers();
    }
  }

}
