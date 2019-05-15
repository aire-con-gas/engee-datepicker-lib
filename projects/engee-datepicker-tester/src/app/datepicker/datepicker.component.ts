import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() width = '43%';

  months = [];
  currMonth1Idx = 0;
  currMonth2Idx = 1;

  constructor() {}

  handlePaginate(action) {
    if (action === 'next') {
      this.currMonth1Idx = this.currMonth2Idx;
      this.currMonth2Idx = this.currMonth1Idx + 1;
    } else {
      this.currMonth2Idx = this.currMonth1Idx;
      this.currMonth1Idx = this.currMonth2Idx - 1;
    }
  }

  ngOnInit() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);
    this.months = [
      `${today.getFullYear()}-${today.getMonth() + 1}`,
      `${nextMonth.getFullYear()}-${nextMonth.getMonth() + 1}`,
      `${nextMonth.getFullYear()}-${nextMonth.getMonth() + 2}`
    ];
  }
}
