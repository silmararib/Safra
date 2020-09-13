import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { SharedExpensesDetailPageRoutingModule } from './shared-expenses-detail-routing.module'
import { SharedExpensesDetailPage } from './shared-expenses-detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SharedExpensesDetailPage }]),
    SharedExpensesDetailPageRoutingModule,
  ],
  declarations: [SharedExpensesDetailPage]
})
export class SharedExpensesDetailPageModule {}
