import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooAdminPageComponent } from './aoo-admin-page.component';

describe('AooAdminPageComponent', () => {
  let component: AooAdminPageComponent;
  let fixture: ComponentFixture<AooAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AooAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
