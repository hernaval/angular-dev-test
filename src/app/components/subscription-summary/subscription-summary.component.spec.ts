import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSummaryComponent } from './subscription-summary.component';

describe('SubscriptionSummaryComponent', () => {
  let component: SubscriptionSummaryComponent;
  let fixture: ComponentFixture<SubscriptionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionSummaryComponent);
    component = fixture.componentInstance;
    component.order = {
      duration: 0, storage: 0, upfrontPayment: false
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
