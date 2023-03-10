import { Component, Input } from '@angular/core';
import { CheckableHierarchyNode } from '../checkable-hierarchy-node';

@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.css']
})
export class AppUserComponent {

  @Input()
  appUserNode : CheckableHierarchyNode = {
    iri: "",
    label: "",
    children: [],
    checked: false
  };
}
