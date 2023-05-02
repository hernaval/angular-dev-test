import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-subscription-term',
  templateUrl: './subscription-term.component.html',
  styleUrls: ['./subscription-term.component.scss']
})
export class SubscriptionTermComponent {
  @Output() checkerEvent: EventEmitter<boolean> = new EventEmitter<boolean>()
  isChecked: boolean = false
  toogleTerms() {
    this.isChecked = !this.isChecked
    this.checkerEvent.emit(this.isChecked)
  }
}
