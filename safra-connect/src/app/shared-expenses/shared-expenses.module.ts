import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedExpensesPage } from './shared-expenses.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SharedExpensesDetailPageRoutingModule } from './shared-expenses-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SharedExpensesPage }]),
    SharedExpensesDetailPageRoutingModule,
  ],
  declarations: [SharedExpensesPage]
})
export class SharedExpensesPageModule {}
