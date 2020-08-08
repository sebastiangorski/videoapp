import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningPopupComponent } from './warning-popup.component';

describe('WarningPopupComponent', () => {
  let component: WarningPopupComponent;
  let fixture: ComponentFixture<WarningPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
