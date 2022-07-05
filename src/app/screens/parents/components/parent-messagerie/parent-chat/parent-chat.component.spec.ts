import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChatComponent } from './parent-chat.component';

describe('ParentChatComponent', () => {
  let component: ParentChatComponent;
  let fixture: ComponentFixture<ParentChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
