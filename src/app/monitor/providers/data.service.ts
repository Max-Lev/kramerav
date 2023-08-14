import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, concatMap, toArray, map } from 'rxjs';
import { IMonitor } from '../models/monitor.model';

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

  constructor(private http: HttpClient) {

  }

  getMonitorByName$(name: string): Observable<IMonitor> {
    return this.http.get<IMonitor>(`${this.api}${name}.json`)
  }

  getData$(): Observable<IMonitor[]> {

    return from(this.fileNames).pipe(
      concatMap((name: string) => {
        if (localStorage.getItem('monitorsData') !== null && localStorage.getItem('monitorsData').length) {
          const monitors: IMonitor[] = JSON.parse(localStorage.getItem('monitorsData')!);
          return monitors;
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
        return JSON.parse(localStorage.getItem('monitorsData')!);
      })
    );
  }

}
