import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewContainerComponent } from './view-container/view-container.component';
import { dataResolver } from './data.resolver';

const routes: Routes = [
  {
    path: '', component: ViewContainerComponent,
    resolve: { getData: dataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorRoutingModule { }
