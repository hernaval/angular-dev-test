import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedIconComponent } from './accepted-icon.component';

describe('AcceptedIconComponent', () => {
  let component: AcceptedIconComponent;
  let fixture: ComponentFixture<AcceptedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
