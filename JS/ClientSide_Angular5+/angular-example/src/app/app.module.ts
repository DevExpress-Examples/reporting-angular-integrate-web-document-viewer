import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxReportViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
