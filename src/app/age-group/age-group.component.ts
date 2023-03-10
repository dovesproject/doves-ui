import { Component } from '@angular/core';
import { ageGroups } from "./age-group";
import {MatCheckboxChange} from "@angular/material/checkbox";
import { CheckableHierarchyNode } from '../checkable-hierarchy-node';
import { Input } from '@angular/core'


@Component({
  selector: 'app-age-group',
  templateUrl: './age-group.component.html',
  styleUrls: ['./age-group.component.css']
})
export class AgeGroupComponent {

  @Input()
  ageGroupNode : CheckableHierarchyNode = {
      iri: "",
      label: "",
      checked: false,
      children: []
    };
}
