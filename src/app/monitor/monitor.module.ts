import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { ViewContainerComponent } from './view-container/view-container.component';


@NgModule({
  declarations: [
    ViewContainerComponent
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule
  ]
})
export class MonitorModule { 
  
}
