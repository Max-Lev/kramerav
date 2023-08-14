import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dataResolver } from './monitor/data.resolver';

const routes: Routes = [
  {
    path: 'monitor',
    loadChildren: () => import('./monitor/monitor.module')
      .then(m => m.MonitorModule),
      resolve: { monitorsData: dataResolver }
  
  },
  {
    path: '', redirectTo: 'monitor', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
