import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {


  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getCart();
  }

  carts = this.dataService.getCart();

  getCart(){
    this.dataService.getCart();
  }

  deleteProduct(id: number){
    this.dataService.deleteProduct(id);
  }

  isEmpty(){
    if(this.carts.length === 0)
      return true;
    
      return false;
  }
}
