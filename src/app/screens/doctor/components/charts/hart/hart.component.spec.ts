import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HartComponent } from './hart.component';

describe('HartComponent', () => {
  let component: HartComponent;
  let fixture: ComponentFixture<HartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
