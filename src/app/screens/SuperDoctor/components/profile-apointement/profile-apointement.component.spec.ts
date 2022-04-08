import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileApointementComponent } from './profile-apointement.component';

describe('ProfileApointementComponent', () => {
  let component: ProfileApointementComponent;
  let fixture: ComponentFixture<ProfileApointementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileApointementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileApointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
