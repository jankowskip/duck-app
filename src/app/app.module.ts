import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DucksListComponent } from './duck/ducks-list/ducks-list.component';
import {DuckService} from "./shared/services/duck.service";
import { FormDuckComponent } from './duck/form-duck/form-duck.component';
import { DucksComponent } from 'app/duck/ducks.component';

@NgModule({
  declarations: [
    AppComponent,
    DucksListComponent,
    FormDuckComponent,
    DucksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [DuckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
