import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitreMessagerieComponent } from './maitre-messagerie.component';

describe('MaitreMessagerieComponent', () => {
  let component: MaitreMessagerieComponent;
  let fixture: ComponentFixture<MaitreMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitreMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitreMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
