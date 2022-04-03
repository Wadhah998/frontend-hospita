import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCasesComponent } from './full-cases.component';

describe('FullCasesComponent', () => {
  let component: FullCasesComponent;
  let fixture: ComponentFixture<FullCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
