import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

import { DummyThievesService } from '../services/dummy-thieves.service';
import { SearchService } from '../services/search.service';

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
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.thieves = this.dummyData.getData();
    this.filteredThieves = this.searchService.searchFilter(this.searchParam, this.thieves);
    console.log(this.searchParam);
    
  }

  public handleScroll(event: ScrollEvent){
    if(event.isReachingTop) {
      this.btn_visible = false;
    } else {
      this.btn_visible = true;
    }
  }

  onSearch(searchbar){
    console.log(searchbar.value);
    this.searchParam = searchbar.value;
    this.searchService.giveSearchParam(this.searchParam);
    this.filteredThieves = this.searchService.searchFilter(this.searchParam, this.thieves);
  }
}
