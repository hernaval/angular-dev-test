import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import {BrandRoutingModule} from "./brand-routing.module";
import {PendingIconComponent} from "../components/icons/pending-icon/pending-icon.component";
import {AcceptedIconComponent} from "../components/icons/accepted-icon/accepted-icon.component";
import {ArrowRightIconComponent} from "../components/icons/arrow-right-icon/arrow-right-icon.component";
import { RejectedIconComponent } from '../components/icons/rejected-icon/rejected-icon.component';
import { DraftIconComponent } from '../components/icons/draft-icon/draft-icon.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    BrandComponent,
    PendingIconComponent,
    AcceptedIconComponent,
    ArrowRightIconComponent,
    RejectedIconComponent,
    DraftIconComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    ReactiveFormsModule
  ]
})
export class BrandModule { }
