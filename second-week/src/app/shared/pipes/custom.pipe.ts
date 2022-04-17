import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(items: any[], searchName: string): any[] {
    if(!searchName)
      return items;

    searchName = searchName.toLowerCase();

    return items.filter(item => {
      if(item){
        return item.name.toLowerCase() === searchName;
      }
      return false;
      })
      
  } 

}
