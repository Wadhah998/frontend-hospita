import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatingsComponent } from './meatings.component';

describe('MeatingsComponent', () => {
  let component: MeatingsComponent;
  let fixture: ComponentFixture<MeatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
