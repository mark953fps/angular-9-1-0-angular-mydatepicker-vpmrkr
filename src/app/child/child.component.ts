import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';
import moment from 'moment';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
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
