import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMProductsComponent } from './vmproducts.component';

describe('VMProductsComponent', () => {
  let component: VMProductsComponent;
  let fixture: ComponentFixture<VMProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
