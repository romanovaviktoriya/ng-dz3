import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    const phones = phone.toString();
    return `${phones.substring(0, 1)} (${phones.substring(1, 4)}) ${phones.substring(4, 7)}-${phones.substring(7, 9)}-${phones.substring(9)}`;
  }

}
