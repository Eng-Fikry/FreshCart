import { Products } from './../../interfaces/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(_Products: Products[], word: string): Products[] {
    return _Products.filter((prod)=> prod.title.toLocaleLowerCase().includes(word.toLocaleLowerCase()));
  }

}
