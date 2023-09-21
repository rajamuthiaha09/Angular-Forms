import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { Rf2Component } from './rf2/rf2.component';

@NgModule({
  declarations: [
    AppComponent,
    Reactiveform1Component,
    Rf2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
