import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedIconComponent } from './rejected-icon.component';

describe('RejectedIconComponent', () => {
  let component: RejectedIconComponent;
  let fixture: ComponentFixture<RejectedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
