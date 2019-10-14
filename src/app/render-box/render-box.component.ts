import { Component, OnInit, Input, OnChanges, ElementRef } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

import { DummyThievesService } from '../services/dummy-thieves.service';
import { SearchService } from '../services/search.service';
import { ThievesService } from '../services/thieves.service';
import { DataInjectorService } from '../services/data-injector.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-render-box',
  templateUrl: './render-box.component.html',
  styleUrls: ['./render-box.component.css']
})
export class RenderBoxComponent implements OnInit {
  searchParam: string = '';
  thieves = [];
  filteredThieves = [];
  error: any = null;
  btn_visible: boolean = false;

  constructor(
    private dummyData: DummyThievesService,
    private searchService: SearchService,
    private thievesService: ThievesService,
    private dataInjector: DataInjectorService,
    private elRef: ElementRef
  ) { 
  }
  
  ngOnInit() {
    this.thievesSubscriber();
    // this.dataInjector.getThievesFromThieves();
    // this.thieves = [];
    // this.thieves = this.dataInjector.injectThieves();
    this.filteredThieves = this.searchService.searchFilter(this.searchParam, this.thieves);
    console.log('Search Param: '+ this.searchParam);
    // console.log();
    this.onSearch(this.elRef.nativeElement.firstElementChild.value);
  }

  public handleScroll(event: ScrollEvent){
    if(event.isReachingTop) {
      this.btn_visible = false;
    } else {
      this.btn_visible = true;
    }
  }

  onSearch(searchbar){
    // console.log(searchbar.value);
    this.searchParam = searchbar.value;
    // console.log(this.searchParam);
    this.searchService.giveSearchParam(this.searchParam);
    this.filteredThieves = this.searchService.searchFilter(this.searchParam, this.thieves);
  }

  onClear(searchbar){
    searchbar.value = '';
    this.onSearch(searchbar);
    // console.log(this.thieves);
  }

  onRefresh(searchbar){
    this.onSearch(searchbar);
  }

  thievesSubscriber(){
    this.thievesService.fetchThievesFromApi().subscribe(responseData => {
      this.thieves = responseData;
    }, error => {
      this.error = error.message;
    });
  }
}
