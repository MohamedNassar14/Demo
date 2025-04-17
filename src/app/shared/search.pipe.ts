import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(media:Product[], title:string): any[] {
    return media.filter((item)=> (item.name).toLowerCase().includes(title.toLocaleLowerCase()));
  }

}
