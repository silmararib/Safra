import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedExpensesPage } from './shared-expenses.page';

const routes: Routes = [
  {
    path: '',
    component: SharedExpensesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedExpensesPageRoutingModule {}
