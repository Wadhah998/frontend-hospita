import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitreContactComponent } from './maitre-contact.component';

describe('MaitreContactComponent', () => {
  let component: MaitreContactComponent;
  let fixture: ComponentFixture<MaitreContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitreContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitreContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
