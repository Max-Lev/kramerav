import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, from, map, mergeMap, of, repeat, switchMap, take, tap, toArray } from 'rxjs';
import { IMonitor } from '../models/monitor.model';
import { StorageMap } from '@ngx-pwa/local-storage';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class DataService {


  fileNames = [
    'BenQ SC3211',
    'Dell ZT60',
    'Haier LE39B50',
    'LG 50LA621Y',
    'Mag RD24L',
    'Normande ND3276',
    'Panasonic TH-L32B6',
    'Philips 55PFL6008',
    'Philips 226V4LSB',
    'Samsung UA46F6400',
    'Samsung UA55F6400',
    'Sharp LC50LE450M',
    'Sony KDL50W656'
  ];

  api = 'http://localhost:4200/assets/JSONmonitors/';

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    // private route: ActivatedRouteSnapshot,
    private storage: StorageMap) {

  }

  getMonitorByName$(name: string): Observable<IMonitor> {
    return this.http.get<IMonitor>(`${this.api}${name}.json`)
  }

  getData$(): Observable<IMonitor[]> {

    return from(this.fileNames).pipe(

      mergeMap((name: string) => {
        if (localStorage.getItem('monitorsData') !== null && localStorage.getItem('monitorsData').length) {
          const monitors: IMonitor[] = JSON.parse(localStorage.getItem('monitorsData')!);
          // console.log(this.activatedRoute.snapshot.data['monitorsData'])
          // this.activatedRoute.snapshot.data['monitorsData'] = [];
          console.log(this.activatedRoute.snapshot.data)
          
          return from(monitors);
        } else {
          return this.getMonitorByName$(name)
        }
      })
    ).pipe(
      toArray(),
    ).pipe(
      map(data => {
        if (localStorage.getItem('monitorsData') === null) {
          localStorage.setItem('monitorsData', JSON.stringify(data));
        }
        return data;
      })
    );
  }

}
