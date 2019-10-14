import { Component, OnInit, ElementRef } from '@angular/core';
import { DummyThievesService } from '../services/dummy-thieves.service';
import { ScrollEvent } from 'ngx-scroll-event';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-remove-thieves',
  templateUrl: './remove-thieves.component.html',
  styleUrls: ['./remove-thieves.component.css']
})
export class RemoveThievesComponent implements OnInit {
  
  thieves = [];
  error: any = null;
  btn_visible: boolean = false;

  constructor(
    private dummyData: DummyThievesService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.thieves = this.dummyData.getData();
  }

  public handleScroll(event: ScrollEvent){
    if(event.isReachingTop) {
      this.btn_visible = false;
    } else {
      this.btn_visible = true;
    }
  }

  onRemove(){
    const row = this.elRef.nativeElement;
    const cards = row.children;
    // console.log(cards);
    //Get all the elements
    const cards_arr = [...cards];
    //Remove the last element (i.e apply button)
    cards_arr.splice(-1,1);
    //Filter out the marked cards
    const toRemove_arr = cards_arr.filter((card) => {
      const inp = card.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
      // console.log(inp);
      return inp.checked;
    });
    //Remove the marked cards
    // console.log(toRemove_arr);
    toRemove_arr.forEach((card) => {
      const name = card.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
      // console.log(name.innerText);
      this.dummyData.removeData(name.innerText);
    });
  }
}
