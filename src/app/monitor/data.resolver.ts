import { ResolveFn } from '@angular/router';
import { DataService } from './providers/data.service';
import { inject } from '@angular/core';

export const dataResolver: ResolveFn<boolean> = (route, state,
  dataService: DataService = inject(DataService)) => {
  debugger;
  return dataService.getData$();
  // return true;
};
