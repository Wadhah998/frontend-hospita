import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMaitreComponent } from './profile-maitre.component';

describe('ProfileMaitreComponent', () => {
  let component: ProfileMaitreComponent;
  let fixture: ComponentFixture<ProfileMaitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMaitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
