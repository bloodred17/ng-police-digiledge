import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThievesService } from './thieves.service';

@Injectable({
  providedIn: 'root'
})
export class DataInjectorService {
  thieves = [];
  error: any = null;

  constructor(
    private thievesService: ThievesService
  ) { }

  getThievesFromThieves(){
    this.thievesService.fetchThievesFromApi().subscribe(responseData => {
      this.thieves = responseData;
    }, error => {
      this.error = error.message;
    });
  }

  injectThieves(){
    return this.thieves;
  }

  removeThievesFromThieves(identifier){
    this.thievesService.deleteThiefFromApi(identifier);
  //   this.thievesService.deleteThiefFromApi(identifier)
  //     .subscribe(responseData => {
  //     console.log(responseData);
  //     return responseData;
  //   }, error => {
  //     this.error = error.message;
  //   });
  //   return this.thieves;
  }
}
