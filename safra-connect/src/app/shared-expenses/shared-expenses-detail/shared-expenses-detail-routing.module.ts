import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedExpensesDetailPage } from './shared-expenses-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SharedExpensesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedExpensesDetailPageRoutingModule {}
