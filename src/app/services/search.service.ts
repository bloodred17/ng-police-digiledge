import { Injectable } from '@angular/core';
import { Thief } from '../interfaces/thief';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchData: string = '';

  constructor() { }

  giveSearchParam(param){
    if(/^[a-zA-Z]*$/.test(param)){
      this.searchData = param;
    }
  }

  getSearchParam(): string{
    return this.searchData;
  }

  searchFilter(param, thieves: Thief[]) : Thief[] { 
    if(param !== ''){
      thieves = thieves.filter((thief) => {
        if(thief.name.toLowerCase().includes(param.toLowerCase())){
          return true;
        }
        thief.addresses.forEach((address) => {
          for(let key in address){
            if(address[key].includes(param.toLowerCase())){
              return true;
            }
          }
        });
      });
    }
    return thieves;
  }

}
