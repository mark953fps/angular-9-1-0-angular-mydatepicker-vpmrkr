import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularMyDatePickerModule ],
  declarations: [ AppComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
