import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelWidgetComponent } from './hotel-widget.component';

describe('HotelWidgetComponent', () => {
  let component: HotelWidgetComponent;
  let fixture: ComponentFixture<HotelWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
