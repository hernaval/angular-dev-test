import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandComponent } from './brand.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ArrowRightIconComponent} from "../components/icons/arrow-right-icon/arrow-right-icon.component";
import {RejectedIconComponent} from "../components/icons/rejected-icon/rejected-icon.component";
import {AcceptedIconComponent} from "../components/icons/accepted-icon/accepted-icon.component";
import {PendingIconComponent} from "../components/icons/pending-icon/pending-icon.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {DraftIconComponent} from "../components/icons/draft-icon/draft-icon.component";

describe('BrandComponent', () => {
  let component: BrandComponent;
  let fixture: ComponentFixture<BrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandComponent, ArrowRightIconComponent, RejectedIconComponent, AcceptedIconComponent, PendingIconComponent, DraftIconComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
