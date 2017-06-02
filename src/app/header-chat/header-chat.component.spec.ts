import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChatComponent } from './header-chat.component';

describe('HeaderChatComponent', () => {
  let component: HeaderChatComponent;
  let fixture: ComponentFixture<HeaderChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
