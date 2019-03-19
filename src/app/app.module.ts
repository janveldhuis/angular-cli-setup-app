import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { GridviewerComponent } from './gridviewer/gridviewer.component';
import { FlexboxviewerComponent } from './flexboxviewer/flexboxviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    GridviewerComponent,
    FlexboxviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
