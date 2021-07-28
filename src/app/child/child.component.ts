import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  myDatePickerOptions: IAngularMyDpOptions = {
    markDates: [
      {
        // yoga dates
        dates: [
          { day: 1, month: 6, year: 2020 },
          { day: 6, month: 6, year: 2020 }
        ],
        styleClass: 'yogaDates'
      },
      {
        // karate dates
        dates: [
          { day: 2, month: 6, year: 2020 },
          { day: 4, month: 6, year: 2020 }
        ],
        styleClass: 'karateDates'
      },
      {
        // boxing dates
        dates: [
          { day: 26, month: 6, year: 2020 },
          { day: 27, month: 6, year: 2020 }
        ],
        styleClass: 'boxingDates'
      },
      {
        // yoga and karate dates
        color: 'red', // this shows red triangle on top-left of the date
        dates: [
          { day: 17, month: 6, year: 2020 },
          { day: 18, month: 6, year: 2020 }
        ],
        styleClass: 'yogaAndKarateDates'
      }
    ],
    disableSince: { year: 2021, month: 7, day: 29 }
    // disabledSince: {
    //   year: new Date().getFullYear(),
    //   month: new Date().getMonth() + 1,
    //   day: new Date().getDate() + 1
    // },
    // disableUntil: {
    //   year: Number(this.getDateStr(-90).substring(0, 4)),
    //   month: Number(this.getDateStr(-90).substring(5, 7)),
    //   day: Number(this.getDateStr(-90).substring(8, 10))
    // }
    // other options here
  };

  public ngOnInit(): void {
    console.log(moment().format('MMM Do YY'), 'hahahahaha');
  }

  // myDatePickerOptions: IAngularMyDpOptions = {
  //   todayTxt: 'Today',
  //   dateFormat: 'DD/MM/YYYY',
  //   firstDayOfWeek: 'Mo',
  //   sunHighlight: true,
  //   selectorWidth: '300px',
  //   inline: false,
  //   showSelectorArrow: true,
  //   disabledSince: {
  //     year: new Date().getFullYear(),
  //     month: new Date().getMonth() + 1,
  //     day: new Date().getDate() + 1
  //   },
  //   disableUntil: {
  //     year: Number(this.getDateStr(-90).substring(0, 4)),
  //     month: Number(this.getDateStr(-90).substring(5, 7))
  //   }
  // };

  public getDateStr(AddDayCount) {
    const dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);
    const y = dd.getFullYear();
    const m =
      dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1;
    const d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate();
    return y + '-' + m + '-' + d;
  }
}
