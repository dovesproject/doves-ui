export interface CheckBoxHierarchyNode {
  id : string;
  label : string;
  children : CheckBoxHierarchyNode [];
  checked : boolean;
}

export function setChildrenChecked(node : CheckBoxHierarchyNode, checked : boolean) : void {
  node.children.forEach(child => {
    child.checked = checked;
    setChildrenChecked(child, checked);
  });
}

export function isIndeterminate(node : CheckBoxHierarchyNode) : boolean {
    // Only if mixed DESCENDANTS or a child is indeterminate
    if(node.children.length == 0) {
      return false;
    }
    let checkedChildren = node.children.filter(child => child.checked);
    if(checkedChildren.length !== 0 && checkedChildren.length !== node.children.length) {
      return true;
    }
    return node.children.find(child => isIndeterminate(child)) !== undefined;
}

export function updateIntermediateState() {

}