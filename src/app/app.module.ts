import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DailpadComponent } from './dailpad/dailpad.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DailpadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
