import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import { specialties } from "./specialties";
import { diseases } from "./diseases";
import {Disease} from "./disease";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Term } from "./term";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getTokens(endPoint : string, query : string) : Observable<Term []> {
    // if(serviceUrl.includes("conditions")) {
      // return diseases.filter((disease) => disease.name.startsWith(query)).map((disease) => disease.name);
    // }
    // else if(serviceUrl.includes("outcomes")) {
     const params = new HttpParams().append("query", query);
     let response = this.http.get<Term []>("http://localhost:8080" + endPoint, {params : params});
     console.log(response);
     return response;
     
    // }
    // else if(serviceUrl.includes("specialties")) {
    //   return specialties.filter((specialty) => specialty.startsWith(query));
    // }
    // else if(serviceUrl.includes("procedures")) {
    //   return ["Office visit", "Administer flu shot"];
    // }
    // else {
    //   return [];
    // }
  }

  isIncluded(disease : Disease, query: string) : boolean {
    return disease.name.startsWith(query)
    || (disease.synonyms !== undefined && disease.synonyms?.findIndex(syn => syn.startsWith(query)) !== -1);
  }
}

