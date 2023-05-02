import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-subscription-steps',
  templateUrl: './subscription-steps.component.html',
  styleUrls: ['./subscription-steps.component.scss']
})
export class SubscriptionStepsComponent {
  @Input() currentStep!: number
}
