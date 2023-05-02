import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-step-control',
  templateUrl: './step-control.component.html',
  styleUrls: ['./step-control.component.scss']
})
export class StepControlComponent {
  @Input() backDisabled: boolean = false
  @Input() nextDisabled: boolean = true
  @Output() onAction: EventEmitter<number> = new EventEmitter()

  // 1 to go next || -1 to go back
  go(value: number) {
    this.onAction.emit(value)
  }
}
