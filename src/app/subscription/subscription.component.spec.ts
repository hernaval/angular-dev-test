import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponent } from './subscription.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StepControlComponent} from "../components/step-control/step-control.component";
import {BrowserModule, By} from "@angular/platform-browser";
import {SubscriptionStepsComponent} from "../components/subscription-steps/subscription-steps.component";
import {SubscriptionSummaryComponent} from "../components/subscription-summary/subscription-summary.component";
import {SubscriptionTermComponent} from "../components/subscription-term/subscription-term.component";

describe('SubscriptionComponent', () => {
  let component: SubscriptionComponent;
  let stepControlComponent: StepControlComponent
  let subscriptionTermComponent: SubscriptionTermComponent
  let subscriptionSummaryComponent: SubscriptionSummaryComponent
  let fixture: ComponentFixture<SubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionComponent, SubscriptionStepsComponent, StepControlComponent, SubscriptionSummaryComponent, SubscriptionTermComponent],
      imports: [ReactiveFormsModule, BrowserModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    stepControlComponent = fixture.debugElement.query(By.directive(StepControlComponent)).componentInstance
    subscriptionSummaryComponent = fixture.debugElement.query(By.directive(SubscriptionSummaryComponent)).componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should disable next button when payment form is invalid in step 1", (done) => {
    component.currentStep = 1 // payment step
    component.paymentForm.setValue({
      cvv: '',
      expirationDate: '',
      number: ''
    })
    fixture.detectChanges()
    expect(stepControlComponent.nextDisabled).toBeTruthy()
    done()
  })

  it("should disable/enable checkout button while acception/refusing terms&condition in step 2", (done) => {
    component.currentStep = 2 // confirmation step
    fixture.detectChanges()
    subscriptionTermComponent = fixture.debugElement.query(By.directive(SubscriptionTermComponent)).componentInstance

    subscriptionTermComponent.checkerEvent.emit(false) // not checked
    fixture.detectChanges()
    expect(subscriptionSummaryComponent.checkoutDisabled).toBeTruthy() // button  disabled

    subscriptionTermComponent.checkerEvent.emit(true) // checked
    fixture.detectChanges()
    expect(subscriptionSummaryComponent.checkoutDisabled).toBeFalse() // button enabled
    done()
  })
});
