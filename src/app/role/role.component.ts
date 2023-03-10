import { Component } from '@angular/core';
import { CheckableHierarchyNode } from '../checkable-hierarchy-node';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  roleNode : CheckableHierarchyNode = {
  
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
}
