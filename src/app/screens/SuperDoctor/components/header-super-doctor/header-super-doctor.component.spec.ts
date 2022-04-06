import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSuperDoctorComponent } from './header-super-doctor.component';

describe('HeaderSuperDoctorComponent', () => {
  let component: HeaderSuperDoctorComponent;
  let fixture: ComponentFixture<HeaderSuperDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSuperDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSuperDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
