import { Component, Input, OnInit, ViewChild } from '@angular/core';

enum PaginationAction {
  Next = 'NEXT',
  Previous = 'PREV'
}

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() width = '43%';
  @ViewChild('transitionWrapper') transitionWrapper;

  activeMonthIndices = [0, 1];
  months = [];
  paginationAction = '';

  get isPaginatingNext() {
    return this.paginationAction === PaginationAction.Next;
  }

  get isPaginatingPrev() {
    return this.paginationAction === PaginationAction.Previous;
  }

  constructor() {}

  getPaginationAction() {
    return {
      action: this.paginationAction.toLowerCase(),
      activeIndices: this.activeMonthIndices
    };
  }

  handlePaginate(action) {
    const [activeIdx1, activeIdx2] = this.activeMonthIndices;
    this.paginationAction = action;

    if (this.isPaginatingNext) {
      this.activeMonthIndices = [activeIdx2, activeIdx2 + 1];
    } else {
      this.activeMonthIndices = [activeIdx1 - 1, activeIdx1];
    }
  }

  isActive(idx) {
    return this.activeMonthIndices.indexOf(idx) !== -1;
  }

  ngOnInit() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);
    this.months = [`${today.getFullYear()}-${today.getMonth() + 1}`];

    for (let i = 1; i < 5; i++) {
      this.months.push(
        `${nextMonth.getFullYear()}-${nextMonth.getMonth() + i}`
      );
    }
  }
}
