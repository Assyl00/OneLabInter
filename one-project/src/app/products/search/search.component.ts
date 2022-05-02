import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, ResponseProduct } from 'src/app/shared/interfaces/data';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Output() data: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  searchName = '';
  searchRes: Product[] = [];
  constructor(private dataService: DataService,) { }

  ngOnInit(): void {
    this.getdata();
    this.search();
  }

  getdata(){
    this.data.emit(this.searchRes);
  }
  search(){
    this.dataService.searchProducts(this.searchName).subscribe((result: ResponseProduct) => {
      if (result && result.products) {
        this.searchRes = result.products;
      }
    })
    console.log(this.searchRes);
  }

}
