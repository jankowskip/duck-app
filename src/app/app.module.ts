import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DucksListComponent } from './duck/ducks-list/ducks-list.component';
import {DuckHttpService} from "./duck/duck-http.service";
import { AddDuckComponent } from './duck/add-duck/add-duck.component';

@NgModule({
  declarations: [
    AppComponent,
    DucksListComponent,
    AddDuckComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [DuckHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
