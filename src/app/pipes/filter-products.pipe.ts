import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    return filterText
      ? value.filter(
          (p: Product) =>
            p.productName
              .toLocaleLowerCase()
              .indexOf(filterText.toLocaleLowerCase()) !== -1
        )
      : value;
  }
}
