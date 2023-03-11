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
    const params = new HttpParams().append("query", query);
    var prefix =  window.location.protocol + "//" + window.location.hostname + ":8080";
    console.log(prefix);
    let response = this.http.get<Term []>(endPoint, {params : params});
    return response;
  }

  isIncluded(disease : Disease, query: string) : boolean {
    return disease.name.startsWith(query)
    || (disease.synonyms !== undefined && disease.synonyms?.findIndex(syn => syn.startsWith(query)) !== -1);
  }
}

