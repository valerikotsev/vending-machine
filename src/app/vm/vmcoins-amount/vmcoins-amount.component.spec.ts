import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMCoinsAmountComponent } from './vmcoins-amount.component';

describe('VMCoinsAmountComponent', () => {
  let component: VMCoinsAmountComponent;
  let fixture: ComponentFixture<VMCoinsAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMCoinsAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMCoinsAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
