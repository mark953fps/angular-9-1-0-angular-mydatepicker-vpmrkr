import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import moment from 'moment';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css']
})
export class CustomDatePickerComponent implements OnInit {
  myDatePickerOptions: IAngularMyDpOptions = {
    disableSince: {
      year: moment().format('YYYY'),
      month: moment().format('MM'),
      day: moment()
        .add(1, 'days')
        .format('DD')
    }
  };

  public ngOnInit(): void {}
}
