import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkManageComponent } from './kvk-manage.component';

describe('KvkManageComponent', () => {
  let component: KvkManageComponent;
  let fixture: ComponentFixture<KvkManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KvkManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KvkManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
