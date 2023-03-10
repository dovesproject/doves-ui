import { Component, OnInit } from '@angular/core';
import {DigitalHealthApplication} from "../digital-health-application";
import { SearchStateService } from '../search-state.service';
import { SearchSpecification } from '../search-specification';
import { SearchService } from '../search.service';
import { map, Observable, of } from 'rxjs';
import { SearchResult } from '../search-result';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

     searchSpecification : SearchSpecification | undefined = undefined; 

    items : DigitalHealthApplication [] = [];

    itemCount : number = 0;

    resultsLoaded : boolean = false;

    constructor(private searchStateService : SearchStateService,
                private searchService : SearchService) {
    }

  ngOnInit(): void {
    this.resultsLoaded = false;
    this.searchSpecification = this.searchStateService.getSearchSpecification();
    this.searchService.performSearch(this.searchSpecification).subscribe(result => {
      this.items = result.matches;
      this.itemCount = result.matches.length;
      this.resultsLoaded = true;
    });
    // this.itemCount = this.items.pipe(map(r => r.length));
  }


}
