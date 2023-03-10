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
  
  @Input() selectedTokens: Term [] = [];

  @ViewChild('tokenInput') tokenInput!: ElementRef<HTMLInputElement>;

  constructor(private tokenService : TokenService ) {
    this.filteredTokens = this.tokenCtrl.valueChanges.pipe(
      startWith(null),
      mergeMap((tok: string | null) => (tok ? this.tokenService.getTokens(this.endPoint, tok) : new Observable<Term []>()))
    );
  }

  remove(token : Term): void {
    const index = this.selectedTokens.indexOf(token);
    if (index >= 0) {
      this.selectedTokens.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedTokens.push(event.option.value);
    this.tokenInput.nativeElement.value = '';
    this.tokenCtrl.setValue(null);
  }

  ngOnInit(): void {
  }

}
