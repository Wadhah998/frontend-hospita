import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMessagerieComponent } from './doctor-messagerie.component';

describe('DoctorMessagerieComponent', () => {
  let component: DoctorMessagerieComponent;
  let fixture: ComponentFixture<DoctorMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
