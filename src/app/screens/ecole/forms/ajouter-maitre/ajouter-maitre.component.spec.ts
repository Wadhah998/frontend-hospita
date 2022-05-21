import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaitreComponent } from './ajouter-maitre.component';

describe('AjouterMaitreComponent', () => {
  let component: AjouterMaitreComponent;
  let fixture: ComponentFixture<AjouterMaitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMaitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterMaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
