import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvdocterComponent } from './rdvdocter.component';

describe('RdvdocterComponent', () => {
  let component: RdvdocterComponent;
  let fixture: ComponentFixture<RdvdocterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvdocterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvdocterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
