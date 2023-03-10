import { Injectable } from '@angular/core';
import { CheckableHierarchyNode } from './checkable-hierarchy-node';
import { SearchSpecification } from './search-specification';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {

  defaultAgeGroupNode : CheckableHierarchyNode = {
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

  private searchSpecification : SearchSpecification = {
    conditions: [],
    outcomes: [],
    specialties: [],
    technologies: [],
    technicalFeatures: [],
    fdaApproved: false,
    fdaCleared: false,
    ageGroupNode: this.defaultAgeGroupNode
}

  constructor() { }

  getSearchSpecification() : SearchSpecification {
    return this.searchSpecification;
  }

  setSearchSpecification(searchSpecification : SearchSpecification) : void {
    this.searchSpecification = searchSpecification;
  }

}
