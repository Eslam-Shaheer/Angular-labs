import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditInfo',
})
export class CreditInfoPipe implements PipeTransform {
  transform(value: [number]): unknown {
    return null;
  }
}
