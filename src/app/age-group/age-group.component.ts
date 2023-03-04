import { Component } from '@angular/core';
import { ageGroups } from "./age-group";
import {MatCheckboxChange} from "@angular/material/checkbox";
import { CheckBoxHierarchyNode } from '../checkbox-hierarchy-node';

@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.css']
})
export class AgeGroupComponent {

  ageGroupNode : CheckBoxHierarchyNode = {
  
      id: "anyAge",
      label: "Any",
      checked: true,
      children: [{
        id: "adult",
        label: "Adult",
        checked: true,
        children: []
      }, {
        id: "adolescent",
        label: "Adolescent",
        checked: true,
        children: []
      }, {
        id: "pediatric",
        label: "Pediatric",
        checked: true,
        children: [{
          id: "child",
          label: "Child",
          checked: true,
          children: []
        }, {
        id: "todler",
        label: "Todler",
        checked: true,
        children: []
      }, {
        id: "neonate",
        label: "Neonate",
        checked: true,
        children: []
      }]
      }]
    };
}
