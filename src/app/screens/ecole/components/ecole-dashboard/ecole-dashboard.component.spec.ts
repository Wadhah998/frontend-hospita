import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleDashboardComponent } from './ecole-dashboard.component';

describe('EcoleDashboardComponent', () => {
  let component: EcoleDashboardComponent;
  let fixture: ComponentFixture<EcoleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoleDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
