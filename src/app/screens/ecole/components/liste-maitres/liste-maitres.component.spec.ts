import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaitresComponent } from './liste-maitres.component';

describe('ListeMaitresComponent', () => {
  let component: ListeMaitresComponent;
  let fixture: ComponentFixture<ListeMaitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMaitresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMaitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
