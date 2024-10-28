import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkComponent } from './kvk.component';

describe('KvkComponent', () => {
  let component: KvkComponent;
  let fixture: ComponentFixture<KvkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KvkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
