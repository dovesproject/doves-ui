import { SearchSpecification } from "./search-specification";

export interface ExplanationRequest {
    searchSpecification : SearchSpecification;
    applicationId : string
}