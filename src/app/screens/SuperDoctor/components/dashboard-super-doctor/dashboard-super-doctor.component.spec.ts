import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuperDoctorComponent } from './dashboard-super-doctor.component';

describe('DashboardSuperDoctorComponent', () => {
  let component: DashboardSuperDoctorComponent;
  let fixture: ComponentFixture<DashboardSuperDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSuperDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSuperDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
