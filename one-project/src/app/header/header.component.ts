import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('login');
    this.router.navigateByUrl('/auth');
    console.log(localStorage.removeItem('login'));
  }

  back(){
    this.location.back();
  }
}
