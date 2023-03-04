export interface AgeGroup {
  label : string;
  checked : boolean;
  subs? : AgeGroup [];
}

export const ageGroups : AgeGroup [] = [{
  label: "Adult",
  checked: true
},{
  label: "Adolescent",
  checked: true
},{
  label: "Pediatric",
  checked: true,
  subs : [{
    label: "Child",
    checked: true
  },{
    label: "Neonate",
    checked: true
  },{
    label: "Toddler",
    checked: true
  }]
}]