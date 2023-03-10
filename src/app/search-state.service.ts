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

  defaultApplicationUserNode : CheckableHierarchyNode = {
  
    iri: "anyRole",
    label: "Any",
    checked: true,
    children: [{
      iri: "administrator",
      label: "Administrator",
      checked: true,
      children: []
    }, {
      iri: "clinician",
      label: "Clinician",
      checked: true,
      children: [{
        iri: "pyshicianAssistant",
        label: "Physician assistant",
        checked: true,
        children: []
      },  {
        iri: "physician",
        label: "Physician",
        checked: true,
        children: []
      }, {
        iri: "nurse",
        label: "Nurse",
        checked: true,
        children: []
      }, {
        iri: "medicalAssistant",
        label: "Medical assistant",
        checked: true,
        children: []
      }]
    }, {
      iri: "family",
      label: "Family",
      checked: true,
      children: []
    },  {
      iri: "caregiver",
      label: "Caregiver",
      checked: true,
      children: []
    }]
  };

  private searchSpecification : SearchSpecification = {
    conditions: [],
    outcomes: [],
    specialties: [],
    technologies: [],
    technicalFeatures: [],
    fdaApproved: false,
    fdaCleared: false,
    ageGroupNode: this.defaultAgeGroupNode,
    appUserNode : this.defaultApplicationUserNode
}

  constructor() { }

  getSearchSpecification() : SearchSpecification {
    return this.searchSpecification;
  }

  setSearchSpecification(searchSpecification : SearchSpecification) : void {
    this.searchSpecification = searchSpecification;
  }

}
