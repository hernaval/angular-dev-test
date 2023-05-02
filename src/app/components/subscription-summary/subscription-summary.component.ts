import {Component, Input, Output} from '@angular/core';
import {SubscriptionOrder} from "../../subscription/core/model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-subscription-summary',
  templateUrl: './subscription-summary.component.html',
  styleUrls: ['./subscription-summary.component.scss']
})
export class SubscriptionSummaryComponent {
  @Input() order!: SubscriptionOrder
  @Input() totalPrice: Observable<number> = new Observable<number>()
  @Input() checkoutDisabled: boolean = false
}
