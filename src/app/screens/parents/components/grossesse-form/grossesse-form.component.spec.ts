import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossesseFormComponent } from './grossesse-form.component';

describe('GrossesseFormComponent', () => {
  let component: GrossesseFormComponent;
  let fixture: ComponentFixture<GrossesseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossesseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossesseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
