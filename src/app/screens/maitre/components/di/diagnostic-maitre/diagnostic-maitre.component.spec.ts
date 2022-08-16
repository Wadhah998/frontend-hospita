import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticMaitreComponent } from './diagnostic-maitre.component';

describe('DiagnosticMaitreComponent', () => {
  let component: DiagnosticMaitreComponent;
  let fixture: ComponentFixture<DiagnosticMaitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticMaitreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticMaitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
