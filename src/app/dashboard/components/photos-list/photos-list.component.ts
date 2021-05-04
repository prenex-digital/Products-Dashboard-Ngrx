import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { storePhoto } from 'src/app/store/actions/photo.actions';
import { AppState } from 'src/app/store/reducers';
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

  constructor(
    private dashboardService: DashboardService,
    private store: Store<AppState>) { }

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

  removePhotos = (photo: Photos, photos: Photos[]) => {
    this.store.dispatch(storePhoto({ photos: photo }))
    let filteredData: Photos[] = photos.filter(pho => pho.id !== photo.id);
    if (filteredData && filteredData.length > 0) {
      this.photos$ = of(filteredData);
    }
  }
}
