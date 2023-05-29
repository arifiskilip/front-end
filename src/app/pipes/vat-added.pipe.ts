import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    if(value == null){
      return 0;
    }
    return value + (value * 0.12)
  }

}
