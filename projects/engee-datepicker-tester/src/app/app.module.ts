import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EngeeDatepickerModule } from 'engee-datepicker';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    EngeeDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
