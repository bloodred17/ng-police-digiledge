import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonforupdate'
})
export class ButtonforupdatePipe implements PipeTransform {

  transform(value: string, state: boolean): string {
    return (state)? 'Done': 'Edit';
  }

}
