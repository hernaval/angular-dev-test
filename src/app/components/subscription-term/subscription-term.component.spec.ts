import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTermComponent } from './subscription-term.component';

describe('SubscriptionTermComponent', () => {
  let component: SubscriptionTermComponent;
  let fixture: ComponentFixture<SubscriptionTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionTermComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
