import { Component } from '@angular/core';
import { CheckBoxHierarchyNode } from '../checkbox-hierarchy-node';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent {

  roleNode : CheckBoxHierarchyNode = {
  
    id: "anyRole",
    label: "Any",
    checked: true,
    children: [{
      id: "administrator",
      label: "Administrator",
      checked: true,
      children: []
    }, {
      id: "clinician",
      label: "Clinician",
      checked: true,
      children: [{
        id: "pyshicianAssistant",
        label: "Physician assistant",
        checked: true,
        children: []
      },  {
        id: "physician",
        label: "Physician",
        checked: true,
        children: []
      }, {
        id: "nurse",
        label: "Nurse",
        checked: true,
        children: []
      }, {
        id: "medicalAssistant",
        label: "Medical assistant",
        checked: true,
        children: []
      }]
    }, {
      id: "family",
      label: "Family",
      checked: true,
      children: []
    },  {
      id: "caregiver",
      label: "Care giver",
      checked: true,
      children: []
    }]
  };
}
