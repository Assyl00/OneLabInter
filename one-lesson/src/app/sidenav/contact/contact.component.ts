import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor() { }

  firstname=""
  lastname=""

  namef(){
    this.firstname = "";
    this.lastname = "";
  }

  ngOnInit(): void {
  }

}
