import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooTeamboardPageComponent } from './aoo-teamboard-page.component';

describe('AooTeamboardPageComponent', () => {
  let component: AooTeamboardPageComponent;
  let fixture: ComponentFixture<AooTeamboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AooTeamboardPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooTeamboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
