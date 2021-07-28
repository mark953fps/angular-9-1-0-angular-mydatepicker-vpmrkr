import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularMyDatePickerModule],
  declarations: [AppComponent, CustomDatePickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
