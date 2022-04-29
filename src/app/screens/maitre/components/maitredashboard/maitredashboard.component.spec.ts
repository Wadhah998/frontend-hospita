import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitredashboardComponent } from './maitredashboard.component';

describe('MaitredashboardComponent', () => {
  let component: MaitredashboardComponent;
  let fixture: ComponentFixture<MaitredashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitredashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitredashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
