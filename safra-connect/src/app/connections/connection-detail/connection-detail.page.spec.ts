import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConnectionDetailPage } from './connection-detail.page';

describe('UserFriendPage', () => {
  let component: ConnectionDetailPage;
  let fixture: ComponentFixture<ConnectionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
