import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleMessagerieComponent } from './ecole-messagerie.component';

describe('EcoleMessagerieComponent', () => {
  let component: EcoleMessagerieComponent;
  let fixture: ComponentFixture<EcoleMessagerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoleMessagerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoleMessagerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
