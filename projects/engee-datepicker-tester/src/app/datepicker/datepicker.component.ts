import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  title = 'engee-datepicker-tester';
  daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  monthArray = [];
  monthTitle = '';

  constructor() { }

  buildCurrentMonth(dateToBuild: Date): Array<any> | null {
    if (typeof dateToBuild !== 'object') {
      return null;
    }

    const currentYear = dateToBuild.getFullYear();
    const currentMonth = dateToBuild.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const DAYS_PER_WEEK = 7;
    const WEEKS_PER_MONTH = 5;
    const MAX_DAYS = DAYS_PER_WEEK * WEEKS_PER_MONTH;

    const monthArray = [];
    let currentDay = null;

    for (let i = 0; i < MAX_DAYS; i++) {
      if (i % DAYS_PER_WEEK === 0) {
        monthArray.push([]);
      }

      if (i >= firstDayOfMonth.getDay() && currentDay < lastDayOfMonth.getDate()) {
        currentDay = (currentDay && currentDay + 1 || 1);
      } else {
        currentDay = null;
      }

      monthArray[monthArray.length - 1].push(
        {
          label: currentDay || '',
          value: currentDay ? new Date(currentYear, currentMonth, currentDay) : ''
        }
      );
    }

    return monthArray;
  }

  handleClick(dateStr) {
    console.log('clicked on', dateStr);
  }

  ngOnInit() {
    const today = new Date();
    this.monthTitle = today.toLocaleString('en-US', { month: 'long'});
    this.monthArray = this.buildCurrentMonth(today);
  }

}
