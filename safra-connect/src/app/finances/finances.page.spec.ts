import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FinancesPage } from './finances.page';

describe('FinancesPage', () => {
  let component: FinancesPage;
  let fixture: ComponentFixture<FinancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FinancesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FinancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
