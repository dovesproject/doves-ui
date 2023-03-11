import { A } from '@angular/cdk/keycodes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Explanation } from './explanation';
import { SearchSpecification } from './search-specification';

@Injectable({
  providedIn: 'root'
})
export class ExplanationService {

  constructor(private http : HttpClient) { }

  getExplanation(searchSpecification : SearchSpecification, applicationId : string) : Observable<Explanation []> {
    let req = {
      searchSpecification : searchSpecification,
      applicationId : applicationId
    }
    return this.http.post<Explanation []>("/api/explain", req);
  }
}
