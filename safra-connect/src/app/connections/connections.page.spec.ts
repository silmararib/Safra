import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConnectionsPage } from './connections.page';

describe('ConnectionsPage', () => {
  let component: ConnectionsPage;
  let fixture: ComponentFixture<ConnectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionsPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ConnectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
