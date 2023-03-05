import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {debounceTime, distinctUntilChanged, Observable} from 'rxjs';
import {map, mergeMap, startWith} from 'rxjs/operators';
import { Term } from '../term';
import {TokenService} from "../token.service";

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})
export class TokenListComponent implements OnInit {

  @Input() label : string = "";

  @Input() hintLabel : string = "";

  @Input() hint : string = "";

  @Input() initialValues : string [] = [];

  @Input() valueSource! : string;

  @Input() endPoint : string = "";

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tokenCtrl = new FormControl('');
  filteredTokens: Observable<Term []>;
  selectedTokens: string[] = [];
  allTokens: string[] = ["Apple", "Banana", "Orange", "Pear"];

  @ViewChild('tokenInput') tokenInput!: ElementRef<HTMLInputElement>;

  constructor(private tokenService : TokenService ) {
    this.filteredTokens = this.tokenCtrl.valueChanges.pipe(
      startWith(null),
      mergeMap((tok: string | null) => (tok ? this.tokenService.getTokens(this.endPoint, tok) : new Observable<Term []>()))
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.selectedTokens.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.tokenCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedTokens.indexOf(fruit);

    if (index >= 0) {
      this.selectedTokens.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedTokens.push(event.option.viewValue);
    this.tokenInput.nativeElement.value = '';
    this.tokenCtrl.setValue(null);
  }

  // private _filter(value: string): string[] {
  //   console.log(value);
  //   return this.tokenService.getTokens(this.serviceUrl, value);
  // }

  ngOnInit(): void {
    this.selectedTokens = this.initialValues;


  }

}
