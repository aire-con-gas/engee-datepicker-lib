import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngeeDatepickerComponent } from './engee-datepicker.component';

describe('EngeeDatepickerComponent', () => {
  let component: EngeeDatepickerComponent;
  let fixture: ComponentFixture<EngeeDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngeeDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngeeDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
