import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedExpensesDetailPage } from './shared-expenses-detail.page';

describe('SharedExpensesDetailComponent', () => {
  let component: SharedExpensesDetailPage;
  let fixture: ComponentFixture<SharedExpensesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedExpensesDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedExpensesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
