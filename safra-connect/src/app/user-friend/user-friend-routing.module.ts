import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserFriendPage } from './user-friend.page';

const routes: Routes = [
  {
    path: '',
    component: UserFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserFriendPageRoutingModule {}
