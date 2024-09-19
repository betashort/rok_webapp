import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkRegisterPageComponent } from './kvk-register-page.component';

describe('KvkRegisterPageComponent', () => {
  let component: KvkRegisterPageComponent;
  let fixture: ComponentFixture<KvkRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KvkRegisterPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvkRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
