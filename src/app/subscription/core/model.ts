export interface SubscriptionPlan {
  duration_months: number
  price_usd_per_gb: number
}

export interface SubscriptionOrder {
  duration: number
  storage: number
  upfrontPayment: boolean
}

export interface PaymentMethodType {
  label: string
  method: any
}

export interface CrediCardType {
  number: string
  expirationDate: Date
  cvv: number
}
