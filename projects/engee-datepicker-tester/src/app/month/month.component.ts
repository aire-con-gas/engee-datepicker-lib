import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {
  daysOfTheWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  monthArray = [];
  monthTitle = '';

  @Input() month = '';

  constructor() {}

  ngOnInit() {
    const monthDateObj = new Date(`${this.month}-02`);
    this.monthTitle = monthDateObj.toLocaleString('en-US', { month: 'long' });
    this.monthArray = this.buildMonth(monthDateObj);
  }

  buildMonth(dateToBuild: Date): Array<any> | null {
    if (typeof dateToBuild !== 'object') {
      return null;
    }

    const currentYear = dateToBuild.getFullYear();
    const currentMonth = dateToBuild.getMonth();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const DAYS_PER_WEEK = 7;
    const WEEKS_PER_MONTH = 6;
    const MAX_DAYS = DAYS_PER_WEEK * WEEKS_PER_MONTH;

    const monthArray = [];
    let currentDay = null;
    let lastDayRendered = false;

    for (let i = 0; i < MAX_DAYS; i++) {
      if (i % DAYS_PER_WEEK === 0) {
        monthArray.push([]);
      }

      if (
        i >= firstDayOfMonth.getDay() &&
        currentDay < lastDayOfMonth.getDate() &&
        !lastDayRendered
      ) {
        currentDay = (currentDay && currentDay + 1) || 1;
      } else {
        currentDay = null;
      }

      if (currentDay === lastDayOfMonth.getDate()) {
        lastDayRendered = true;
      }

      monthArray[monthArray.length - 1].push({
        label: currentDay || '',
        value: currentDay ? new Date(currentYear, currentMonth, currentDay) : ''
      });
    }

    return monthArray;
  }

  handleClick(dateStr) {
    console.log('clicked on', dateStr);
  }
}
