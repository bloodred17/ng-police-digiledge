import { Component, OnInit, ElementRef } from '@angular/core';
import { DummyThievesService } from '../services/dummy-thieves.service';
import { ScrollEvent } from 'ngx-scroll-event';
import { EventEmitter } from 'events';
import { SearchService } from '../services/search.service';
import { ThievesService } from '../services/thieves.service';
import { DataInjectorService } from '../services/data-injector.service';

@Component({
  selector: 'app-remove-thieves',
  templateUrl: './remove-thieves.component.html',
  styleUrls: ['./remove-thieves.component.css']
})
export class RemoveThievesComponent implements OnInit {
  searchParam: string = '';
  filteredThieves = [];
  thieves = [];
  error: any = null;
  btn_visible: boolean = false;

  constructor(
    private searchService: SearchService,
    private thievesService: ThievesService,
    private dataInjector: DataInjectorService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    // this.thieves = this.dummyData.getData();
    this.thievesSubscriber();
    this.filteredThieves = this.searchService.searchFilter(this.searchParam, this.thieves);
  }

  public handleScroll(event: ScrollEvent){
    if(event.isReachingTop) {
      this.btn_visible = false;
    } else {
      this.btn_visible = true;
    }
  }

  onRemove(){
    // const row = this.elRef.nativeElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    const row = this.elRef.nativeElement.firstElementChild.nextElementSibling;
    // console.log(row);
    const cards = row.children;
    // console.log(cards);
    //Get all the elements
    const cards_arr = [...cards];
    //Filter out the marked cards
    const toRemove_arr = cards_arr.filter((card) => {
      const inp = card.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
      // console.log(inp);
      return inp.checked;
    });
    // console.log(toRemove_arr);
    //Remove the marked cards
    toRemove_arr.forEach((card) => {
      const _id = card.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
      console.log(_id.innerText);
      // this.dummyData.removeData(name.innerText);
      // REMOVE DATA HERE
      this.dataInjector.removeThievesFromThieves(_id);
      this.thievesSubscriber();
    });
  }

  thievesSubscriber(){
    this.thievesService.fetchThievesFromApi().subscribe(responseData => {
      this.thieves = responseData;
    }, error => {
      this.error = error.message;
    });
  }

  onRefresh(){
      
  }
}
