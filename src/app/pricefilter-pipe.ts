import { Pipe, PipeTransform } from '@angular/core';
import { Toy } from './toy';
@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

   transform(toys: Toy[], selectedRange: string): Toy[] {
    if (!selectedRange) return toys;

    return toys.filter(toy => {
      const price = toy.price ?? 0;

      switch (selectedRange) {
        case '1-100':
          return price >= 1 && price <= 100;
        case '100-500':
          return price > 100 && price <= 500;
        case '500-1000':
          return price > 500 && price <= 1000;
        case '1000+':
          return price > 1000;
        default:
          return true;
      }
    });
  }
}
