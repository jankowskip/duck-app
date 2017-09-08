import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DucksListComponent } from './duck/ducks-list/ducks-list.component';
import { DuckService } from "./shared/services/duck.service";
import { AddDuckComponent } from './duck/add-duck/add-duck.component';
import { DuckComponent } from './duck/duck.component';

@NgModule({
  declarations: [
    AppComponent,
    DucksListComponent,
    AddDuckComponent,
    DuckComponent
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
