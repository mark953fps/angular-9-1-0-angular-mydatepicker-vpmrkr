import { Component, OnInit, Input } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import moment from 'moment';

@Component({
  selector: 'app-custom-date-picker',
  templateUrl: './custom-date-picker.component.html',
  styleUrls: ['./custom-date-picker.component.css'],
})
export class CustomDatePickerComponent implements OnInit {
  @Input() public isEnabledClicking: boolean = false;

  model = {
    isRange: false,
    singleDate: {
      date: {
        year: Number(moment().format('YYYY')),
        month: Number(moment().format('MM')),
        day: Number(moment().format('DD')),
      },
    },
  };

  myDatePickerOptions: IAngularMyDpOptions = {
    disableSince: {
      year: moment().format('YYYY'),
      month: moment().format('MM'),
      day: moment().add(1, 'days').format('DD'),
    },
    // disableUntil: {
    //   year: moment().format('YYYY'),
    //   month: moment().format('MM'),
    //   day: moment()
    //     .subtract(2, 'days')
    //     .format('DD')
    // }
  };

  public ngOnInit(): void {}
}
