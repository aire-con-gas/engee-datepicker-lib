import { Component, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerComponent } from './datepicker.component';

@Component({
  selector: `mock-host-component`,
  template: `<app-datepicker></app-datepicker>`
})
class TestHostComponent {
  @ViewChild(DatepickerComponent)
  public datepickerComponent: DatepickerComponent;
}

describe('DatepickerComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatepickerComponent,
        TestHostComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  describe('.buildCurrentMonth', () => {
    it('should return an array', () => {
      const today = new Date();
      expect(testHostComponent.datepickerComponent.buildCurrentMonth(today).length).toBeGreaterThan(0);
    });
  })
});
