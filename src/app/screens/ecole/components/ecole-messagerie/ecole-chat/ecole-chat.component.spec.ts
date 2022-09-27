import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoleChatComponent } from './ecole-chat.component';

describe('EcoleChatComponent', () => {
  let component: EcoleChatComponent;
  let fixture: ComponentFixture<EcoleChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoleChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
