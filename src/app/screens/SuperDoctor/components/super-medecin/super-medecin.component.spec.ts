import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMedecinComponent } from './super-medecin.component';

describe('SuperMedecinComponent', () => {
  let component: SuperMedecinComponent;
  let fixture: ComponentFixture<SuperMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
