import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchSpecification } from './search-specification';
import { SearchResult } from './search-result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http : HttpClient) { }

  performSearch(searchSpecification: SearchSpecification) : Observable<SearchResult> {
    var o = searchSpecification.outcomes.map(outcome => outcome.iri);
    var c = searchSpecification.conditions.map(condition => condition.iri);
    return this.http.post<SearchResult>("http://localhost:8080/search", {
      outcomes : o,
      conditions : c
    });
  }
}
