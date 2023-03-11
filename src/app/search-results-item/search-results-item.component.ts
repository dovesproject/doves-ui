import {Component, Input} from '@angular/core';
import {DigitalHealthApplication} from "../digital-health-application";
import { ExplanationService } from '../explanation.service';
import { SearchStateService } from '../search-state.service';
import {MatDialog} from '@angular/material/dialog'
import { ExplanationComponent } from '../explanation/explanation.component';
import { ExplanationsComponent } from '../explanations/explanations.component';
import { Explanation } from '../explanation';

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.css']
})
export class SearchResultsItemComponent {
  
  @Input() item! : DigitalHealthApplication;

  explanation : Explanation [] = []

  computingExplanation: boolean = false;

  constructor(private service : SearchStateService,
              private explanationService : ExplanationService,
              private dialog : MatDialog) {

  }

  explainResult() : void {
      let searchSpec = this.service.getSearchSpecification();
      let applicationId = this.item.id;
      this.computingExplanation = true;
      this.explanationService.getExplanation(searchSpec, applicationId)
        .subscribe(expls => {
          this.computingExplanation = false;
          this.explanation = expls;
      })
  }

  closeExplanation() {
    this.explanation = [];
  }

}
