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

  activeMonthIndexes = [0, 1];
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
    return this.paginationAction.toLowerCase();
  }

  handlePaginate(action) {
    const [activeIdx1, activeIdx2] = this.activeMonthIndexes;
    const transitionWrapperClasses = this.transitionWrapper.nativeElement
      .classList;
    this.paginationAction = action;

    if (this.isPaginatingNext) {
      this.activeMonthIndexes = [activeIdx2, activeIdx2 + 1];
    } else {
      this.activeMonthIndexes = [activeIdx1 - 1, activeIdx1];
    }
  }

  isActive(idx) {
    return this.activeMonthIndexes.indexOf(idx) !== -1;
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
