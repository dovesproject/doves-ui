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
    return this.http.post<SearchResult>("/api/search", searchSpecification);
  }
}
