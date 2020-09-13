import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConnectionsPage } from './connections.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ConnectionsPageRoutingModule } from './connections-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ConnectionsPageRoutingModule
  ],
  declarations: [ConnectionsPage]
})
export class ConnectionsPageModule {}
