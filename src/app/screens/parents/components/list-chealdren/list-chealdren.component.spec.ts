import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChealdrenComponent } from './list-chealdren.component';

describe('ListChealdrenComponent', () => {
  let component: ListChealdrenComponent;
  let fixture: ComponentFixture<ListChealdrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChealdrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChealdrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
