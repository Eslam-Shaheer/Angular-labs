import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyTransform',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): number {
    return value * 15;
  }
}
