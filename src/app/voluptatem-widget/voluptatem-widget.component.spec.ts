import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluptatemWidgetComponent } from './voluptatem-widget.component';

describe('VoluptatemWidgetComponent', () => {
  let component: VoluptatemWidgetComponent;
  let fixture: ComponentFixture<VoluptatemWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluptatemWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluptatemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
