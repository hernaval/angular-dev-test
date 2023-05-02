import { TestBed } from '@angular/core/testing';

import {SubscriptionService} from './subscription.service';
import {SubscriptionOrder} from "../core/model";
import {NotSubscriptionPlanError} from "../core/custom.error";
import {CreditCardPaymentMethod} from "../core/impl";
import {of} from "rxjs";

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it("should throw error for non-existant subscription plan", (done) => {
    const order: SubscriptionOrder = {
      duration: 13,
      storage: 5,
      upfrontPayment: true
    }
    service.calculatePrice(order)
      .subscribe({
        error: (err => expect(err).toBeInstanceOf(NotSubscriptionPlanError))

      })
    done()

  })

  it("should calculate the correct price with upfront payment", (done) => {
    const order: SubscriptionOrder = {
      duration: 3,
      storage: 5,
      upfrontPayment: true
    }

    const spy = spyOn(service, "getSubscriptionPlan").and.returnValue(of({
      duration_months: 3,
      price_usd_per_gb: 3
    }));

    service.calculatePrice(order)
      .subscribe(value => {
        expect(spy).toHaveBeenCalledWith(3) // get the correct duration
        expect(value).toEqual(13.5) //3USD * 5BG - 10% (discount)
        done()
      })
  })

  it("should process the order successfully", (done) => {
    const order: SubscriptionOrder = {
      duration: 3,
      storage: 5,
      upfrontPayment: true
    }
    const crediCard = new CreditCardPaymentMethod({number: "4242424242424242", expirationDate: new Date(),cvv: 123})
    service.processOrder(order, crediCard)
      .subscribe(p => {
        expect(p).toBeTruthy()
        done()
      })

  })
});
