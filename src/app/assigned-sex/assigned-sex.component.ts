import { Component } from '@angular/core';
import { CheckableHierarchyNode } from '../checkable-hierarchy-node'

@Component({
  selector: 'app-assigned-sex',
  templateUrl: './assigned-sex.component.html',
  styleUrls: ['./assigned-sex.component.css']
})
export class AssignedSexComponent {

  assignedSexNode : CheckableHierarchyNode = {
    iri: "anySex",
    label: "Filter by patient assigned sex",
    checked: false,
    style : "font-weight: bold;",
    children: [{
      iri: "femaleSex",
      label: "Female",
      checked: false,
      children: []
    }, {
      iri: "maleSex",
      label: "Female",
      checked: false,
      children: []
    }
    ]};
}
