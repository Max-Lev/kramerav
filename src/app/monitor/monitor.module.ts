import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorRoutingModule } from './monitor-routing.module';
import { ViewContainerComponent } from './view-container/view-container.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './providers/data.service';
import { EdidComponent } from './components/edid/edid.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    ViewContainerComponent,
    EdidComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MonitorRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  providers:[DataService]
})
export class MonitorModule { 
  
}
