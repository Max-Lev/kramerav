import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { ViewContainerComponent } from './view-container/view-container.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './providers/data.service';
import { EdidComponent } from './components/edid/edid.component';

@NgModule({
  declarations: [
    ViewContainerComponent,
    EdidComponent
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    HttpClientModule,
  ],
  providers:[DataService]
})
export class MonitorModule { 
  
}
