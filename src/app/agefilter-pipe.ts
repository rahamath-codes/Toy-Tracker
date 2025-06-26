import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agefilter'
})
export class AgefilterPipe implements PipeTransform {

  transform(toys: any[], selectedAge: string) {
    if (!selectedAge) return toys;
    return toys.filter(toy => toy.ageRange === selectedAge);
  }
}
