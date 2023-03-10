import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckableHierarchyNode, setChildrenChecked, isIndeterminate} from "../checkable-hierarchy-node";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox-hierarchy',
  templateUrl: './checkbox-hierarchy.component.html',
  styleUrls: ['./checkbox-hierarchy.component.css']
})
export class CheckboxHierarchyComponent {

  @Output()
  notify = new EventEmitter();

  @Input("node")
  node : CheckableHierarchyNode | undefined;

  handleChildrenChanged() {
    if(this.node === undefined) {
      return;
    }
    let checkChildren = this.node.children.filter(child => child.checked);
    let childrenChecked = checkChildren.length === this.node.children.length;
    this.node.checked = childrenChecked;
    this.notify.emit();
  }

  updateChildren(event : MatCheckboxChange) : void {
    if(this.node === undefined) {
      return;
    }  
    setChildrenChecked(this.node, event.checked);
      this.notify.emit();
  }

  isIndeterminate() : boolean {
    if(this.node === undefined) {
      return false;
    }
    return isIndeterminate(this.node);
  }
}
