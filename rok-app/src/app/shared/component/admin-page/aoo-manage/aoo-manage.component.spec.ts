import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooManageComponent } from './aoo-manage.component';

describe('AooManageComponent', () => {
  let component: AooManageComponent;
  let fixture: ComponentFixture<AooManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AooManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
