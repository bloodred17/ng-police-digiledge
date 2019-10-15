import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonforupdate'
})
export class ButtonforupdatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
