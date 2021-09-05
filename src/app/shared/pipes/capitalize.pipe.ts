import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
      if (value) {
      const tempVal = value.split(' ');
      const last = tempVal[1];
      const first = tempVal[0];
      return first.charAt(0).toUpperCase() + first.slice(1) + ' ' + (last ? last.charAt(0).toUpperCase() + last.slice(1) : '');
    }
    return value;
  }
}
