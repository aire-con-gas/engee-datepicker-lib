import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EngeeDatepickerModule } from 'engee-datepicker';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    MonthComponent
  ],
  imports: [
    BrowserModule,
    EngeeDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
