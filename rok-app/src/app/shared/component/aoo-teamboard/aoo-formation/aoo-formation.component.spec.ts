import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooFormationComponent } from './aoo-formation.component';

describe('AooFormationComponent', () => {
  let component: AooFormationComponent;
  let fixture: ComponentFixture<AooFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AooFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
