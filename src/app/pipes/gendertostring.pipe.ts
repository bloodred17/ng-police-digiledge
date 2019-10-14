import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../interfaces/gender';

@Pipe({
  name: 'gendertostring'
})
export class GendertostringPipe implements PipeTransform {

  transform(value: Gender): string {
    return (value === Gender.male)? 'Male' : 'Female';
  }

}
