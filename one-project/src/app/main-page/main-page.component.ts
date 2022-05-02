import { Component, OnInit } from '@angular/core';
import { Product, ResponseProduct } from '../shared/interfaces/data';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }

  
}
