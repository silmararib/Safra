import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserFriendPage } from './user-friend.page';

describe('UserFriendPage', () => {
  let component: UserFriendPage;
  let fixture: ComponentFixture<UserFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFriendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
