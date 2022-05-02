import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ResponseProduct } from '../shared/interfaces/data';
import { CustomPipe } from '../shared/pipes/custom.pipe';
import { DataService } from '../shared/services/data.service';
import { DestroyComponent } from '../destroy.component'
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent extends DestroyComponent implements OnInit {
  products: Product[] = [];
  searchName = '';
  searchRes: Product[] = [];

  constructor(
    private dataService: DataService,
  ) {
    super();
   }

  ngOnInit(): void {
    this.search();
  }

  // getProducts(){
  //   this.dataService.getProducts().subscribe((result: ResponseProduct) => {
  //     if (result && result.products) {
  //       this.products = result.products;
  //     }
  //   });
  // }

  search(){
      this.dataService.searchProducts(this.searchName)
      .pipe(takeUntil(this.destroyed))
      .subscribe((result: ResponseProduct) => {
        if (result && result.products) {
          this.searchRes = result.products;
        }
      })
    }
    
  eventHandle( event: Product[]){
    this.products = event;
  }
}
