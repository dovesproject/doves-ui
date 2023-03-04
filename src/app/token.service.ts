import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { specialties } from "./specialties";
import { diseases } from "./diseases";
import {Disease} from "./disease";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Condition} from "./condition";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getTokens(serviceUrl : string, query : string) : string [] {
    if(serviceUrl.includes("conditions")) {
//      const params = new HttpParams().append("query", query);
//      let response = this.http.get<Condition []>("http://localhost:8080/conditions",
//      {params : params})
//      .forEach(match => );
//      return diseases.filter(condition => this.isIncluded(disease, query)).map(disease => disease.name);
      return diseases.filter((disease) => disease.name.startsWith(query)).map((disease) => disease.name);
    }
    else if(serviceUrl.includes("specialties")) {
      return specialties.filter((specialty) => specialty.startsWith(query));
    }
    else if(serviceUrl.includes("procedures")) {
      return ["Office visit", "Administer flu shot"];
    }
    else {
      return [];
    }
  }

  isIncluded(disease : Disease, query: string) : boolean {
    return disease.name.startsWith(query)
    || (disease.synonyms !== undefined && disease.synonyms?.findIndex(syn => syn.startsWith(query)) !== -1);
  }
}

