export interface CheckableHierarchyNode {
  iri : string;
  label : string;
  children : CheckableHierarchyNode [];
  checked : boolean;
  style? : string | undefined;
}

export function setChildrenChecked(node : CheckableHierarchyNode, checked : boolean) : void {
  node.children.forEach(child => {
    child.checked = checked;
    setChildrenChecked(child, checked);
  });
}

export function isIndeterminate(node : CheckableHierarchyNode) : boolean {
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
