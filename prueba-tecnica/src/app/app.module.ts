import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighestOccurrenceComponent } from './highest-occurrence/highest-occurrence.component';

import { HttpClientModule } from '@angular/common/http';
import { ContributorsListComponent } from './contributors-list/contributors-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighestOccurrenceComponent,
    ContributorsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
