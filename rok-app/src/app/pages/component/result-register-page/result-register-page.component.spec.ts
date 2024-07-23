import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRegisterPageComponent } from './result-register-page.component';

describe('ResultRegisterPageComponent', () => {
  let component: ResultRegisterPageComponent;
  let fixture: ComponentFixture<ResultRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
