import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { DestroyComponent } from '../destroy.component';
import { Product, ResponseProduct } from '../shared/interfaces/data';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent extends DestroyComponent implements OnInit {

  product!: Product;
  feedback: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { 
    super();
  }

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(){
    this.route.paramMap
    .pipe(takeUntil(this.destroyed))
    .subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.dataService.getProduct(id).subscribe((product: Product) => {
        this.product = product;
      });
    });
  }

  getId(){
    return this.route.paramMap
    .pipe(takeUntil(this.destroyed))
    .subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      return id;
    });
  }

  addToCart(product: Product){
    const login = localStorage.getItem('login');
    if (login === 'assyl') {
      this.dataService.addToCart(product);
      alert("added");
      console.log(login);
    }
    else{
      alert("Please authorize first!");
      this.router.navigateByUrl('/login');
    }
    // console.log(login);
    // console.log(this.dataService.cart)
    
  }

}
