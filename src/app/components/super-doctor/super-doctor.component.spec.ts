import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDoctorComponent } from './super-doctor.component';

describe('SuperDoctorComponent', () => {
  let component: SuperDoctorComponent;
  let fixture: ComponentFixture<SuperDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
