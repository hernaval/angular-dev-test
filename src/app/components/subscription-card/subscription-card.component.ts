import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SubscriptionPlan} from "../../subscription/core/model";

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss']
})
export class SubscriptionCardComponent {
  @Input() item!: SubscriptionPlan
  @Input() active: boolean = false
  @Output() onChooseEvent = new EventEmitter<number>()

  choose(duration: number) {
    this.onChooseEvent.emit(duration)
  }
}
