import { Injectable } from '@angular/core';
import {SubscriptionOrder, SubscriptionPlan} from "../core/model";
import {PaymentMethod} from "../core/interface";
import {
  BehaviorSubject,
  delay,
  map,
  Observable,
  of,
  switchMap,
} from "rxjs";
import {PricingService} from "./pricing.service";
import {NoDiscountStrategy, StorageAndDurationPricingStrategy, UpfrontPaymentDiscountStrategy} from "../core/impl";
import {NotSubscriptionPlanError} from "../core/custom.error";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  private readonly subscriptionPlans: SubscriptionPlan[] = [
    { duration_months: 3, price_usd_per_gb: 3 },
    { duration_months: 6, price_usd_per_gb: 2.5 },
    { duration_months: 12, price_usd_per_gb: 2 }
  ];
  subcriptionOrderSubject$: BehaviorSubject<SubscriptionOrder> = new BehaviorSubject<SubscriptionOrder>({duration: 12, storage: 5, upfrontPayment: false}) // Default option as in test requirement
  constructor(private pricingService: PricingService) { }

  updateOrder(newOrder: Partial<SubscriptionOrder>) {
    this.subcriptionOrderSubject$.next({...this.subcriptionOrderSubject$.value, ...newOrder})
  }

  currentOrder(): Observable<SubscriptionOrder> {
    return this.subcriptionOrderSubject$
  }

  calculatePrice(subscriptionOrder: SubscriptionOrder): Observable<number> {
    // TODO discount should call after price calculation, separate to a command pattern
    const discountStrategy = subscriptionOrder.upfrontPayment ? new UpfrontPaymentDiscountStrategy(): new NoDiscountStrategy()
    const pricingStrategy = new StorageAndDurationPricingStrategy() // here we have just the storage pricing plan
    return this.getSubscriptionPlan(subscriptionOrder.duration)
      .pipe(
        map((plan: SubscriptionPlan) => {
          return this.pricingService.calculate(plan, subscriptionOrder, pricingStrategy, discountStrategy)
        })
      )
  }
  // TODO Refactor
  processOrder(subscriptionOrder: SubscriptionOrder, paymentMethod: PaymentMethod): Observable<boolean> {
    return this.calculatePrice(subscriptionOrder)
      .pipe(
        map(p => p),
        switchMap(p => {
          return paymentMethod.pay(p)
        })
      )
  }

  getAllSubscriptionPlans(): Observable<SubscriptionPlan[]> {
    return of(this.subscriptionPlans).pipe(delay(1000))
  }

  getSubscriptionPlan(duration: number): Observable<SubscriptionPlan> {
    return new Observable<SubscriptionPlan>((observer) => {
      const plan = this.subscriptionPlans.find(s => s.duration_months === duration)
      if(plan) {
        observer.next(plan)
        observer.complete()
      }
      else {
        observer.error(new NotSubscriptionPlanError(duration))
      }
    })
  }
}

