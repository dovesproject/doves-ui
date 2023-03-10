import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './other/other.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { TokenListComponent } from './token-list/token-list.component';
import { AgeGroupComponent } from './age-group/age-group.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { EhrIntegrationComponent } from './ehr-integration/ehr-integration.component';
import { RegulatoryComponent } from './regulatory/regulatory.component';
import { FormsModule } from "@angular/forms";
import { AssignedSexComponent } from './assigned-sex/assigned-sex.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { HttpClientModule} from '@angular/common/http';
import { RoleComponent } from './role/role.component';
import { CheckboxHierarchyComponent } from './checkbox-hierarchy/checkbox-hierarchy.component'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio'
import { AppUserComponent } from './app-user/app-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtherComponent,
    TokenListComponent,
    AgeGroupComponent,
    EhrIntegrationComponent,
    RegulatoryComponent,
    AssignedSexComponent,
    SearchResultsComponent,
    SearchResultsItemComponent,
    RoleComponent,
    CheckboxHierarchyComponent,
    AppUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
