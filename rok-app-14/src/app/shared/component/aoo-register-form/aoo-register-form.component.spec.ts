import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooRegisterFormComponent } from './aoo-register-form.component';

describe('AooRegisterFormComponent', () => {
  let component: AooRegisterFormComponent;
  let fixture: ComponentFixture<AooRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AooRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
