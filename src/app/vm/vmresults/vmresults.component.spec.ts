import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMResultsComponent } from './vmresults.component';

describe('VMResultsComponent', () => {
  let component: VMResultsComponent;
  let fixture: ComponentFixture<VMResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VMResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
