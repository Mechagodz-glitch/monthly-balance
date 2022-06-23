import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: any | {}) {
    localStorage.setItem(key, value);
    return window.alert('Added to Local Storage');
  }

  getAllData(): any {
    if(localStorage.length <= 0) {
    return [];  
    } else {
      
      // for(var i =0; i < localStorage.length; i++) {
      //     keys[i] = localStorage["_keys"][i]
      // }
  
      // for(var i =0; i < localStorage.length; i++) {
      //     values.push(localStorage[keys[i]])
      // }
  
      // return values;

      // Object.keys(localStorage).forEach(data => 
      //   {
      //     let item = localStorage.getItem(data);
      //     values.push(item);
      //   });

      var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }


    console.log(values.toString())
    return values;
  }
}
}
