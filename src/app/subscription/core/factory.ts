import {CreditCardPaymentMethod} from "./impl";
import {PaymentMethod} from "./interface";

export class PaymentMethodFactory {
  static createCreditCard(): PaymentMethod {
    return new CreditCardPaymentMethod()
  }

}
