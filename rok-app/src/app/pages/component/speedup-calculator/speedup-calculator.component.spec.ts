import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedupCalculatorComponent } from './speedup-calculator.component';

describe('SpeedupCalculatorComponent', () => {
  let component: SpeedupCalculatorComponent;
  let fixture: ComponentFixture<SpeedupCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeedupCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedupCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
