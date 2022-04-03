import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChealdrenProfileComponent } from './chealdren-profile.component';

describe('ChealdrenProfileComponent', () => {
  let component: ChealdrenProfileComponent;
  let fixture: ComponentFixture<ChealdrenProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChealdrenProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChealdrenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
