import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEnfantsComponent } from './profil-enfants.component';

describe('ProfilEnfantsComponent', () => {
  let component: ProfilEnfantsComponent;
  let fixture: ComponentFixture<ProfilEnfantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilEnfantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilEnfantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
