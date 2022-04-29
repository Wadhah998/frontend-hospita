import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEnfantComponent } from './ajouter-enfant.component';

describe('AjouterEnfantComponent', () => {
  let component: AjouterEnfantComponent;
  let fixture: ComponentFixture<AjouterEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
