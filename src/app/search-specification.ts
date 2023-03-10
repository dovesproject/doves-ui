import { CheckableHierarchyNode } from "./checkable-hierarchy-node";
import { Term } from "./term";

export interface SearchSpecification {

    outcomes : Term [];

    conditions : Term [];

    specialties : Term [];

    technicalFeatures : Term [];

    technologies : Term [];

    fdaApproved : boolean;

    fdaCleared : boolean,

    ageGroupNode : CheckableHierarchyNode

}