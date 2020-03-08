import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degrees'
})
export class DegreesPipe implements PipeTransform {
  transform(value: number): any {
    return `${Math.round(value)}°`;
  }
}
