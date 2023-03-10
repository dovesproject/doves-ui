import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CheckableHierarchyNode } from '../checkable-hierarchy-node';
import { SearchSpecification } from '../search-specification';
import { SearchStateService } from '../search-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private searchStateService : SearchStateService,
              private router : Router) {
  }

  ngOnInit(): void {
      this.searchSpecification = this.searchStateService.getSearchSpecification();
  }

  defAGNode : CheckableHierarchyNode = {
    iri: "anyAge",
    label: "Filter by patient age group",
    checked: false,
    children: [{
      iri: "adult",
      label: "Adult",
      children: [],
      checked: false
    }, {
      iri: "adolescent",
      label: "Adolescent",
      checked: false,
      children: []
    }, {
      iri: "pediatric",
      label: "Pediatric",
      children: [{
        iri: "child",
        label: "Child",
        checked: false,
        children: []
      }, {
      iri: "toddler",
      label: "Toddler",
      checked: false,
      children: []
    }, {
      iri: "neonate",
      label: "Neonate",
      checked: false,
      children: []
    }],
    checked: false
    }]
  }

  searchSpecification : SearchSpecification = this.searchStateService.getSearchSpecification();



  performSearch() : void {
    this.searchStateService.setSearchSpecification(this.searchSpecification);
      console.log("Search spec: %s", this.searchSpecification)
      this.router.navigateByUrl("/searchresults")
    }
}
