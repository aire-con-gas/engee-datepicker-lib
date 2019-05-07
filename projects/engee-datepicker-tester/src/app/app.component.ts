import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'engee-datepicker-tester';
  monthArray = [];

  ngOnInit() {
    this.monthArray = this.buildCurrentMonth();
  }

  buildCurrentMonth() {
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

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

      monthArray[monthArray.length - 1].push(currentDay);
    }

    return monthArray;
  }
}
