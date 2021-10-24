import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalInfo',
})
export class PersonalInfoPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (args == 'YY') {
      let year = value.slice(1, 3);
      return 19 + year;
    } else if (args == 'MM') {
      let month = value.slice(3, 5);
      return month;
    } else if (args == 'DD') {
      let day = value.slice(5, 7);
      return day;
    } else if (args == 'FullDate') {
      let year1 = value.slice(1, 3);
      let month1 = value.slice(3, 5);
      let day1 = value.slice(5, 7);
      return `${day1}-${month1}-${19 + year1}`;
    }
  }
}
