import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinFormComponent } from './medecin-form.component';

describe('MedecinFormComponent', () => {
  let component: MedecinFormComponent;
  let fixture: ComponentFixture<MedecinFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});