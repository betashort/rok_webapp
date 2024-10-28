import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooComponent } from './aoo.component';

describe('AooComponent', () => {
  let component: AooComponent;
  let fixture: ComponentFixture<AooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AooComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
