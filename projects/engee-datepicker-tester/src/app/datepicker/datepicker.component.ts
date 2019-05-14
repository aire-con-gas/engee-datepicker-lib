import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() width = '43%';

  months = [];

  constructor() {}

  ngOnInit() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);
    this.months = [
      `${today.getFullYear()}-${today.getMonth() + 1}`,
      `${nextMonth.getFullYear()}-${nextMonth.getMonth() + 1}`
    ];
  }
}
