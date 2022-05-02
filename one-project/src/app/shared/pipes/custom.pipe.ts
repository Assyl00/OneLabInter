import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/data';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(items: Product[] = [], searchName: string): Product[] {
    if(!searchName){
      return items;
    }

    searchName = searchName.toLowerCase();

    return items.filter(item => {
      if(item){
        return item.title.toLowerCase() === searchName;
      }
      return false;
      })
  }

}
