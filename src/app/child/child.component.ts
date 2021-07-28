import { Component, OnInit } from '@angular/core';
import {IAngularMyDpOptions, IMyDateModel} from 'angular-mydatepicker';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm',
    disableUntil: { year: 2020, month: 1, day: 1 },
    // other options are here...
  };

  myDateInit: boolean = true;
  model: IMyDateModel = null;

  constructor() { }

  ngOnInit() {
    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.model = {
        isRange: false,
        singleDate: {
          date: { 
            year: 2019, 
            month: 5, 
            day: 14 
          }
        }
      };
    }
    else {
      // Initialize to today with javascript date object
      this.model = {isRange: false, singleDate: {jsDate: new Date()}};
    }
  }

}