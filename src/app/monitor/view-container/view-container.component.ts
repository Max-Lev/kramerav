import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, map, Subject, takeUntil } from 'rxjs';
import { IMonitor } from '../models/monitor.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  monitors$: Observable<IMonitor[]>;
  monitors: IMonitor[] = [];
  searchForm: FormGroup;
  sub$: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private changeDetectors: ChangeDetectorRef) {

    this.searchForm = this.formBuilder.group({
      search: new FormControl<string>('')
    });

  }
  ngOnDestroy(): void {
    this.sub$.next(false);
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {

    if (localStorage.getItem('monitorsData') === null) {
      this.monitors$ = of(JSON.parse(localStorage.getItem('monitorsData')!));
    } else {
      this.monitors$ = of(this.activatedRoute.snapshot.data['monitorsData']);
    }
    this.monitors = [...this.activatedRoute.snapshot.data['monitorsData']];

  }

  ngAfterViewInit(): void {

    this.searchForm.get('search').valueChanges.pipe(takeUntil(this.sub$)).subscribe((searchValue: string) => {
      let results: any[] = [];
      if (searchValue !== '') {
        this.monitors.filter((monitor: IMonitor) => {
          const item: string = Object.values(monitor).toString().toLowerCase();
          if (item.includes(searchValue.toLowerCase())) {
            results.push(monitor);
            this.monitors$ = of(results);
          }
          if (results.length === 0) {
            this.monitors$ = of([]);
          }
        });
      } else {
        this.monitors$ = of(JSON.parse(localStorage.getItem('monitorsData')!));
        results = [];
      }
    });
  }

  selecteHandler(monitor: IMonitor) {

    this.monitors$.pipe(
      map(monitors => {
        const itemIndex = monitors.findIndex(item => item.Name === monitor.Name);
        if (this.monitors[itemIndex].status === 1) {
          monitors[itemIndex] = monitor = { ...monitor, ...{ status: (monitor.status === 1) ? 0 : 1 } };
        }
        return monitors;
      })
    )
    .pipe(takeUntil(this.sub$))
    .subscribe({
      next: ((monitors: IMonitor[]) => localStorage.setItem('monitorsData', JSON.stringify(monitors)))
    });

  }

}
