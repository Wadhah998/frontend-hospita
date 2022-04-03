import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledCasesComponent } from './cancelled-cases.component';

describe('CancelledCasesComponent', () => {
  let component: CancelledCasesComponent;
  let fixture: ComponentFixture<CancelledCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelledCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
