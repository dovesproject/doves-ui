import { Component } from '@angular/core';
import {SearchResultItem} from "../search-result-item";
import {apps} from "../apps";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

    items : SearchResultItem [] = apps;
}
