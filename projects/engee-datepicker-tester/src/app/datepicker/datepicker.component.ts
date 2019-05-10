import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  months = [];

  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.months = ['2019-05', '2019-06'];
  }
}
