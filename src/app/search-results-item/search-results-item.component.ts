import {Component, Input} from '@angular/core';
import {SearchResultItem} from "../search-result-item";

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css']
})
export class SearchResultsItemComponent {
  @Input() item! : SearchResultItem;
}
