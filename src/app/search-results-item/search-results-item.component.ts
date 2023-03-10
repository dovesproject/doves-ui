import {Component, Input} from '@angular/core';
import {DigitalHealthApplication} from "../digital-health-application";
import { ExplanationService } from '../explanation.service';
import { SearchStateService } from '../search-state.service';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css']
})
export class SearchResultsItemComponent {
  
  @Input() item! : DigitalHealthApplication;

  constructor(private service : SearchStateService,
              private explanationService : ExplanationService) {

  }

  explainResult() : void {
      let searchSpec = this.service.getSearchSpecification();
      let applicationId = this.item.id;
      this.explanationService.getExplanation(searchSpec, applicationId)
      .subscribe(expls => {
        window.alert(JSON.stringify(expls));
      })

  }

}
