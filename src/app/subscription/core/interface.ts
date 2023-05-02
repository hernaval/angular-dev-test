import {SubscriptionOrder, SubscriptionPlan} from "./model";
import {Observable} from "rxjs";

export interface PaymentMethod {
  pay(amount: number): Observable<boolean>
}

export interface PricingStrategy {
  calculatePrice(subscriptionPlan: SubscriptionPlan, subscriptionOrder: SubscriptionOrder): number
}

export interface DiscountStrategy {
  applyDiscount(price: number): number
}
