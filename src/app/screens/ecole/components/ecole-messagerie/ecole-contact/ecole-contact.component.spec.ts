import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleContactComponent } from './ecole-contact.component';

describe('EcoleContactComponent', () => {
  let component: EcoleContactComponent;
  let fixture: ComponentFixture<EcoleContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoleContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
