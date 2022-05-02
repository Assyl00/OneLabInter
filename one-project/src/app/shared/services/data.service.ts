import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback, Product, ResponseProduct } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://dummyjson.com';
  cart: Product[] = [];

  constructor(private client: HttpClient) { }

  getProducts(): Observable<ResponseProduct> {
    return this.client.get<ResponseProduct>(`${this.BASE_URL}/products`);
  }

  getProduct(id: number): Observable<Product> {
    return this.client.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  searchProducts(str: string): Observable<ResponseProduct>{
    return this.client.get<ResponseProduct>(`${this.BASE_URL}/products/search?q=${str}`);
  }

  getCart(){
    return this.cart;
  }

  deleteProduct(id: number){
    this.cart = this.cart.filter((x) => x.id !== id);
    console.log(this.cart);
  }

  addToCart(product: Product){
    this.cart.push(product);
  }



}
