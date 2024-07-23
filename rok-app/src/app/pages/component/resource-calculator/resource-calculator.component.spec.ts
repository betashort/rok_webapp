import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceCalculatorComponent } from './resource-calculator.component';

describe('ResourceCalculatorComponent', () => {
  let component: ResourceCalculatorComponent;
  let fixture: ComponentFixture<ResourceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
