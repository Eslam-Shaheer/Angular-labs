import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditInfo',
})
export class CreditInfoPipe implements PipeTransform {
  transform(value: string): unknown {
    let start: number = 0;
    let end: number = 4;
    let array = [];
    let finalVal;
    for (let i = 0; i < 4; i++) {
      let arrVal: string = value.slice(start, end);
      start += 4;
      end += 4;
      array.push(arrVal);
      if (i < 3) {
        array.push('-');
      }
    }
    finalVal = array.join('');

    return finalVal;
  }
}
