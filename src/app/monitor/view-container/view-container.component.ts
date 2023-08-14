import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { Observable, from, map, of } from 'rxjs';
import { IMonitor } from '../models/monitor.model';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements OnInit {

  monitors$: Observable<IMonitor[]> = null;

  constructor(private activatedRoute: ActivatedRoute,
    
    ) {
    console.log(this.activatedRoute.snapshot.data['monitorsData'])
    // console.log(this.activatedRoute.snapshot.data)
    
    console.log(JSON.parse(localStorage.getItem('monitorsData')));
    // this.monitors$ = new Observable();
    this.monitors$ = of(this.activatedRoute.snapshot.data['monitorsData']);

  }
  ngOnInit(): void {
    // this.monitors$.pipe(
    //   map((data: IMonitor[]) => {
    //     if (!data.length) {
    // this.monitors$ = of(this.activatedRoute.snapshot.data['monitorsData']);
    //     }
    //   })
    // )
  }

}
