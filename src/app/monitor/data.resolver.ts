import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { DataService } from './providers/data.service';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMonitor } from './models/monitor.model';

export const dataResolver: ResolveFn<Observable<IMonitor[]>> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
  dataService: DataService = inject(DataService)) => {
  
  return dataService.getData$();
};
