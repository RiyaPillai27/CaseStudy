import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryButtonComponent } from './summary-button.component';

describe('SummaryButtonComponent', () => {
  let component: SummaryButtonComponent;
  let fixture: ComponentFixture<SummaryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
