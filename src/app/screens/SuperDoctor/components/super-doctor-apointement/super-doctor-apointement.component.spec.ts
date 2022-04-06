import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDoctorApointementComponent } from './super-doctor-apointement.component';

describe('SuperDoctorApointementComponent', () => {
  let component: SuperDoctorApointementComponent;
  let fixture: ComponentFixture<SuperDoctorApointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDoctorApointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDoctorApointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
