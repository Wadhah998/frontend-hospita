import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/screens/admin/user-profile/user-profile.component.spec.ts
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
========
import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatComponent ]
>>>>>>>> origin/orlyXd:src/app/screens/SuperDoctor/components/messagerie/chat/chat.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/screens/admin/user-profile/user-profile.component.spec.ts
    fixture = TestBed.createComponent(UserProfileComponent);
========
    fixture = TestBed.createComponent(ChatComponent);
>>>>>>>> origin/orlyXd:src/app/screens/SuperDoctor/components/messagerie/chat/chat.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
