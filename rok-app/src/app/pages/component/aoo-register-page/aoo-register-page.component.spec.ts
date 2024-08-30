import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooRegisterPageComponent } from './aoo-register-page.component';

describe('AooRegisterPageComponent', () => {
  let component: AooRegisterPageComponent;
  let fixture: ComponentFixture<AooRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AooRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
