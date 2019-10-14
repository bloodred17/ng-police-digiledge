import { Injectable } from '@angular/core';
import { Thief } from '../interfaces/thief';
import { Thieves } from '../data/thieves';

@Injectable({
  providedIn: 'root'
})
export class DummyThievesService {
  
  constructor() { }
    
  thieves : Thief[] = Thieves;


  getData() : Thief[] {
    return this.thieves;
  }

  addData(data: Thief) {
    this.thieves.push(data);
  }

  removeData(identifier) {
    let removed: boolean = false;
    let removable: boolean = false;
    let pos: number = undefined;
    this.thieves.forEach((thief, idx) => {
      if(thief.name === identifier){
        pos = idx;
        removable = true;
      }
    });
    if(removable && pos > -1){
      this.thieves.splice(pos, 1);
      removed = true;
    }
    return removed;    
  }

  updateData(field, value){
    let updated: boolean = false;
    this.thieves.forEach((thief, idx) => {
      for(let key in thief){
        if(key === field){
          thief[key] = value;
          updated = true;
        }
      }
    });
    return updated;
  }
}
