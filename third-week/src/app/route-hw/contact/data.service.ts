import { Injectable } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data : FormGroup = new FormGroup({
    username: new FormControl,
    comment: new FormControl,
  })

  constructor() { }

  

  getData(){
    return this.data;
  }

  saveToStorage() {
    localStorage.setItem('userForm', JSON.stringify(this.data.value));
  }

  getFromStorage(): any {
    return localStorage.getItem('userForm');
  }
}
