import {DiscountStrategy, PaymentMethod, PricingStrategy} from "./interface";
import {CrediCardType, SubscriptionOrder, SubscriptionPlan} from "./model";
import {Observable, of} from "rxjs";

export class CreditCardPaymentMethod implements PaymentMethod {
  private number: string
  private expirationDate: Date
  private cvv: number

  // TODO validation

  constructor({number, expirationDate, cvv}: CrediCardType) {
    this.number = number
    this.expirationDate = expirationDate
    this.cvv = cvv
  }

  pay(amount: number): Observable<boolean> {
    return of(true);
  }
}

// if we would like to add another payment method
/*export class PaypalPaymentMethod implements PaymentMethod {
  private string email: string

  pay(amount: number): boolean {
    return false;
  }
}*/

export class StorageAndDurationPricingStrategy implements PricingStrategy {
  calculatePrice(subscriptionPlan: SubscriptionPlan, subscriptionOrder: SubscriptionOrder): number {
    return subscriptionPlan.price_usd_per_gb * subscriptionOrder.storage;
  }

}


export class UpfrontPaymentDiscountStrategy implements DiscountStrategy {
  applyDiscount(price: number): number {
    return price * 0.9;
  }
}
export class NoDiscountStrategy implements DiscountStrategy {
  applyDiscount(price: number): number {
    return price;
  }
}
