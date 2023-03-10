import { Component, Input } from '@angular/core';
import { CheckableHierarchyNode } from '../checkable-hierarchy-node'

@Component({
  selector: 'app-assigned-sex',
  templateUrl: './assigned-sex.component.html',
  styleUrls: ['./assigned-sex.component.css']
})
export class AssignedSexComponent {

  @Input()
  assignedSexNode : CheckableHierarchyNode = {
    iri: "",
    label: "",
    checked: false,
    children: []
  };
}
