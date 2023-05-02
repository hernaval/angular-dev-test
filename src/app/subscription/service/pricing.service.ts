import {Injectable} from "@angular/core";
import {DiscountStrategy, PricingStrategy} from "../core/interface";
import {SubscriptionOrder, SubscriptionPlan} from "../core/model";
import {map, Observable} from "rxjs";
import {StorageAndDurationPricingStrategy} from "../core/impl";

@Injectable({
  providedIn: 'root'
})
export class PricingService {
  constructor() {
  }

  calculate(subscriptionPlan: SubscriptionPlan, subscriptionOrder: SubscriptionOrder,pricingStrategy: PricingStrategy, discountStrategy: DiscountStrategy): number {
    const price: number = pricingStrategy.calculatePrice(subscriptionPlan, subscriptionOrder)

    return discountStrategy.applyDiscount(price)
  }
}
