import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserFriendPageRoutingModule } from './user-friend-routing.module';

import { UserFriendPage } from './user-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserFriendPageRoutingModule
  ],
  declarations: [UserFriendPage]
})
export class UserFriendPageModule {}
