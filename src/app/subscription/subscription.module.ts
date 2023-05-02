import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import {SubscriptionRoutingModule} from "./subscription-routing.module";
import {SubscriptionCardComponent} from "../components/subscription-card/subscription-card.component";
import {SubscriptionStepsComponent} from "../components/subscription-steps/subscription-steps.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SubscriptionTermComponent} from "../components/subscription-term/subscription-term.component";
import {StepControlComponent} from "../components/step-control/step-control.component";
import {SubscriptionSummaryComponent} from "../components/subscription-summary/subscription-summary.component";



@NgModule({
  declarations: [
    SubscriptionComponent,
    SubscriptionCardComponent,
    SubscriptionStepsComponent,
    SubscriptionTermComponent,
    StepControlComponent,
    SubscriptionSummaryComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    ReactiveFormsModule
  ]
})
export class SubscriptionModule { }
