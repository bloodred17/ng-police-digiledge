import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convictiontostring'
})
export class ConvictiontostringPipe implements PipeTransform {

  transform(value: boolean): string {
    return (value)? 'Convicted' : 'Being pursued'
  }

}
