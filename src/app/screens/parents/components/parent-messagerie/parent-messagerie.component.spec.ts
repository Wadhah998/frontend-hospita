import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMessagerieComponent } from './parent-messagerie.component';

describe('ParentMessagerieComponent', () => {
  let component: ParentMessagerieComponent;
  let fixture: ComponentFixture<ParentMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
