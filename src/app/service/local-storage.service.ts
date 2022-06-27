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
    // return window.alert('Added to Local Storage');
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
    // return window.alert('Item removed.')
  }

  hasItem(key: string) {
    if (localStorage.getItem(key) == 'undefined') {
      return false;
    } else if (localStorage.getItem(key)) {
      return true;
    }
  }

  clearLocal() {
    localStorage.clear();
  }

  getAllData(): any {
    if (localStorage.length <= 0) {
      return [];
    } else {
      var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

      while (i--) {
        values.push(localStorage.getItem(keys[i]));
      }
      console.log(values.toString())
      return values;
    }
  }
}
