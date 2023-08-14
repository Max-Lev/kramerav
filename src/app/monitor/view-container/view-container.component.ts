import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { Observable, filter, from, map, mergeMap, of, tap } from 'rxjs';
import { IMonitor } from '../models/monitor.model';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewContainerComponent implements OnInit {

  monitors$: Observable<IMonitor[]>;

  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectors: ChangeDetectorRef) {

  }
  ngOnInit(): void {

    if (localStorage.getItem('monitorsData') === null) {
      this.monitors$ = of(JSON.parse(localStorage.getItem('monitorsData')!));
    } else {
      this.monitors$ = of(this.activatedRoute.snapshot.data['monitorsData']);
    }
  }

  selecteHandler(monitor: IMonitor) {

    this.monitors$.pipe(
      map(monitors => {
        let _monitor = monitors.find(_monitor => _monitor.Name === monitor.Name);
        const itemIndex = monitors.findIndex(item => item.Name === monitor.Name);
        monitors[itemIndex] =
          _monitor = { ..._monitor, ...{ status: (_monitor.status === 1) ? 0 : 1 } };
        return monitors;
      })
    ).subscribe()

  }

}
