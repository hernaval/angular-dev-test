import {Component, OnInit} from '@angular/core';
import {SubscriptionService} from "./service/subscription.service";
import {map, Observable, of, Subscription, switchMap, tap} from "rxjs";
import {CrediCardType, SubscriptionOrder, SubscriptionPlan} from "./core/model";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {validator} from "./core/validator";
import {CreditCardPaymentMethod} from "./core/impl";


@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit{
  subscriptionPlans$: Observable<SubscriptionPlan[]> = new Observable<SubscriptionPlan[]>()
  subscriptionOrder$: Observable<SubscriptionOrder> = new Observable<SubscriptionOrder>()
  currentStep: number = 0
  totalPrice: Observable<number> = of(0)
  paymentForm!: FormGroup
  termChecked: boolean = false
  constructor(private subscriptionService: SubscriptionService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getSubscriptionPlans()
    this.listenToOrderChange()
    this.listenToPriceChange()

    this.paymentForm = this.fb.group({
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      expirationDate: ['', Validators.required],
      number: ['', [Validators.required, validator]]
    })
  }
  listenToOrderChange(): void {
    this.subscriptionOrder$ = this.subscriptionService
      .currentOrder()
  }

  listenToPriceChange(): void {
    this.totalPrice = this.subscriptionOrder$
      .pipe(
        switchMap(order =>  this.subscriptionService.calculatePrice(order))
      )
  }

  getSubscriptionPlans(): void {
    this.subscriptionPlans$ = this.subscriptionService.getAllSubscriptionPlans()
  }

  chooseSubscriptionDuration(duration_months: number) {
    this.subscriptionService.updateOrder({duration: duration_months})
  }

  changeSubscriptionStorage({target}: any) {
    this.subscriptionService.updateOrder({storage: Number(target.value)})
  }

  changeSubscriptionUpfrontPayment(lastValue: boolean) {
    this.subscriptionService.updateOrder({upfrontPayment: !lastValue})
  }

  confirmPayment() {
    this.subscriptionOrder$
      .pipe(
        map(order => order),
        switchMap(order => {
          return this.subscriptionService.processOrder(order, new CreditCardPaymentMethod({...this.paymentForm.value}))
        })
      )
  }

  updateStep(number: number) {
    this.currentStep += number
  }

  toogleChecker(value: boolean) {
    this.termChecked = value
  }
}
