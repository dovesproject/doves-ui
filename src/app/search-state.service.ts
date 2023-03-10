import { Injectable } from '@angular/core';
import { CheckableHierarchyNode } from './checkable-hierarchy-node';
import { SearchSpecification } from './search-specification';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {

  defaultAgeGroupNode : CheckableHierarchyNode = {
    iri: "https://purl.org/doves/d7fdedbd-6d0d-4d67-bd98-03f4c80c944b",
    label: "Filter by patient age group",
    checked: false,
    children: [{
      iri: "http://purl.org/doves/0b28937e_45cc_4f6f_b7d5_2d9ae70f61a0",
      label: "Adult",
      children: [],
      checked: false
    }, {
      iri: "http://purl.org/doves/a61dbcd2_0d2c_4269_a9dd_c34cb9fd5965",
      label: "Adolescent",
      checked: false,
      children: []
    }, {
      iri: "https://purl.org/doves/6f732e5a-3cb8-47b2-a83e-7e7d24512e77",
      label: "Pediatric",
      children: [{
        iri: "http://purl.org/doves/doves-ontology#Child_Age_Group",
        label: "Child",
        checked: false,
        children: []
      }, {
      iri: "http://purl.org/doves/doves-ontology#Toddler_Age_Group",
      label: "Toddler",
      checked: false,
      children: []
    }, {
      iri: "https://purl.org/doves/9597d5d0-d59c-47e9-808d-6827b75664ae",
      label: "Neonate",
      checked: false,
      children: []
    }],
    checked: false
    }]
  }

  defaultApplicationUserNode : CheckableHierarchyNode = {
  
    iri: "https://purl.org/doves/38552094-2ddf-4e81-b33d-080f5b904cd7",
    label: "Any",
    checked: true,
    children: [{
      iri: "https://purl.org/doves/da5b1476-bbe6-4a2a-8267-886475bcc6f4",
      label: "Administrator",
      checked: true,
      children: []
    }, {
      iri: "https://purl.org/doves/13c1b5fc-1104-44fe-9975-74c60a26595f",
      label: "Clinician",
      checked: true,
      children: [{
        iri: "https://purl.org/doves/657b9d62-19a9-4e32-a7d3-677a72ee4a6e",
        label: "Physician assistant",
        checked: true,
        children: []
      },  {
        iri: "https://purl.org/doves/37a002b3-8eec-4341-b3d0-6ccb97d8e42d",
        label: "Physician",
        checked: true,
        children: []
      }, {
        iri: "https://purl.org/doves/29dcd95d-567e-485e-84af-7fb536fa08a4",
        label: "Nurse",
        checked: true,
        children: []
      }, {
        iri: "https://purl.org/doves/f36e2870-61e7-4b51-abcd-8752df25ea68",
        label: "Medical assistant",
        checked: true,
        children: []
      }]
    }, {
        iri: "https://purl.org/doves/b129abd1-3d08-42e9-b1b3-7ed9f235fe93",
        label: "Patient",
        checked: true,
        children: []
    }, {
      iri: "https://purl.org/doves/ecb2896b-027f-4dbb-b63c-d0a230014bb2",
      label: "Family",
      checked: true,
      children: []
    },  {
      iri: "https://purl.org/doves/4df28317-0241-45a9-b39a-69ef066fd4d5",
      label: "Caregiver",
      checked: true,
      children: []
    }]
  };

  defaultAssignedSexNode: CheckableHierarchyNode = {
    iri: "https://purl.org/doves/81955a73-7b46-4cb4-bbae-5c34311aa8a0",
    label: "Filter by patient assigned sex",
    checked: false,
    children: [{
      iri: "https://purl.org/doves/7d739656-06a3-4b6c-96c2-52e6b45bc838",
      label: "Female",
      checked: false,
      children: []
    }, {
      iri: "https://purl.org/doves/3e2dd533-3e2d-4d1a-a752-570ccebe9fa1",
      label: "Male",
      checked: false,
      children: []
    }
    ]};

  private searchSpecification : SearchSpecification = {
    conditions: [],
    outcomes: [],
    specialties: [],
    technologies: [],
    technicalFeatures: [],
    fdaApproved: false,
    fdaCleared: false,
    ageGroupNode: this.defaultAgeGroupNode,
    appUserNode : this.defaultApplicationUserNode,
    assignedSexNode : this.defaultAssignedSexNode
}

  constructor() { }

  getSearchSpecification() : SearchSpecification {
    return this.searchSpecification;
  }

  setSearchSpecification(searchSpecification : SearchSpecification) : void {
    this.searchSpecification = searchSpecification;
  }

}
