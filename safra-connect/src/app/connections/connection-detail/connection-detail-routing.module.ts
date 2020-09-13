import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionDetailPage } from './connection-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionDetailPageRoutingModule {}
