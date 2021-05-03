import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { Photos } from '../../models/photos';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  public photos$: Observable<Photos[]>;
  destroy$: Subject<Photos[]> = new Subject<Photos[]>();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.photos$ = this.dashboardService
      .getAllPhotos()
      .pipe(
        map(photos => photos),
        takeUntil(this.destroy$),
        shareReplay()
      )
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }
}
