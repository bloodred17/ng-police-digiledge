import { Injectable } from '@angular/core';
import { Thief } from '../interfaces/thief';
import { log } from 'util';

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
        let found: boolean = false;
        console.log('Name test: ');
        console.log(thief.name.toLowerCase().includes(param.toLowerCase()));
        if(thief.name.toLowerCase().includes(param.toLowerCase())){
          return true;
        }
        thief.addresses.forEach((address) => {
          for(let key in address){
            // ------For Debugging---------
            // console.log(param.toLowerCase());
            // console.log(address[key].toString().toLowerCase().includes(param.toLowerCase()));
            if(address[key].toString().toLowerCase().includes(param.toLowerCase())){
              // ---For Debugging---
              // console.log(`${key} test: `);
              // console.log(address[key].toString().toLowerCase());
              // return true;
              found = true;
              break;
            }
          }
        });
        return found ? true : false;
      });
    }
    return thieves;
  }

}
