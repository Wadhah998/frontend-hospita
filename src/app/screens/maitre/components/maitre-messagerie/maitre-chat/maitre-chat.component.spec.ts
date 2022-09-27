import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitreChatComponent } from './maitre-chat.component';

describe('MaitreChatComponent', () => {
  let component: MaitreChatComponent;
  let fixture: ComponentFixture<MaitreChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaitreChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaitreChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
