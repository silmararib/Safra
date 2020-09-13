import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectionDetailPageRoutingModule } from './connection-detail-routing.module';

import { ConnectionDetailPage } from './connection-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionDetailPageRoutingModule
  ],
  declarations: [ConnectionDetailPage]
})
export class ConnectionDetailPageModule {}
