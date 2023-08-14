import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'monitor',
    loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorModule)
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
