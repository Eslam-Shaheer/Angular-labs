import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalInfo',
})
export class PersonalInfoPipe implements PipeTransform {
  transform(id: number, birthDate: Date): unknown {
    return `ID number: ${id}<br>
    BirthDay: ${birthDate}<br>
    
    `;
  }
}
