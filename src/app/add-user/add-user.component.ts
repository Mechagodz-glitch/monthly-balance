import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { LocalStorageService } from '../service/local-storage.service';

export interface MemberDetails {
  name: string;
  month: string;
  amount: string;
}


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {



   title = 'balanceApp';
  
  postData = {"name": "", "month": "", "amount": ""};

  members = new UntypedFormControl();
  months = new UntypedFormControl();

  amountValue: string = '';

  membersList: string[] = ['Ravi Kanth', 'Hima Bindu', 'Sameera', 'Aravind'];

  monthsList: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  displayedColumns: string[] = ['name', 'month', 'amount'];
  dataSource: MemberDetails[] = [];

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {

  }

  ngOnInit() {
    // localStorage.clear();
    // console.log(JSON.stringify(localStorage.getItem('memberRavi Kanth')))
    this.getAllUsers();
    // this.localStorage.setItem('member', 'raviKanth');
    // console.log(this.localStorage.getItem('member'))
  }

  submitData() {

    // this.dataSource = ELEMENT_DATA;

    this.postData["name"] = this.members.value
    this.postData["month"] = this.months.value
    this.postData["amount"] = this.amountValue

console.log(this.dataSource.length)

localStorage.setItem('member'+this.postData["name"], JSON.stringify(this.postData));
this.getAllUsers();

// this.http.post('http://localhost:3000/members', this.postData).subscribe((data) => {
//   console.log(data);
//   this.getAllUsers();
// })
  }

  getAllUsers() {
    // this.http.get('http://localhost:3000/members').subscribe((data: any) => {
    //   console.log("Added Users "+ data);
    //   this.dataSource = data.map(JSON.parse);
    //   // console.log("formatted data : " + formattedData)
    //   console.log(this.dataSource)
    // })
    // this.dataSource = this.localStorage.getAllData();
    // console.log(this.localStorage.getAllData())
    // var values = [],
    //     keys = Object.keys(localStorage),
    //     i = keys.length;

    // while ( i-- ) {
    //     values.push( localStorage.getItem(keys[i]) );
    // }


    // console.log(values)
    // return values;

    this.dataSource = this.localStorage.getAllData().map(JSON.parse);
  }

  removeRow(name: string) {
    // for(var i = 0; i<= localStorage.length - 1; i++) {
    //   if(localStorage[i]["name"] == name) {
    //     localStorage.removeItem(localStorage[i])
    //   }
    // }
    localStorage.removeItem('member'+name);
    this.dataSource = this.dataSource.filter((u) => u.name !== name);
    this.getAllUsers();
  }

}
