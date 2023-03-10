import {Component, Input} from '@angular/core';
import {DigitalHealthApplication} from "../digital-health-application";

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css']
})
export class SearchResultsItemComponent {
  @Input() item! : DigitalHealthApplication;
}
