import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AooMemberListComponent } from './aoo-member-list.component';

describe('AooMemberListComponent', () => {
  let component: AooMemberListComponent;
  let fixture: ComponentFixture<AooMemberListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AooMemberListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AooMemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
