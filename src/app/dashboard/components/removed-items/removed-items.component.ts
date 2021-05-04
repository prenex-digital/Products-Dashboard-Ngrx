import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { getPhotos } from 'src/app/store/selectors/photo.selector';
import { getPosts } from 'src/app/store/selectors/posts.selector';
import { Photos } from '../../models/photos';
import { Posts } from '../../models/posts';

@Component({
  selector: 'app-removed-items',
  templateUrl: './removed-items.component.html',
  styleUrls: ['./removed-items.component.scss']
})
export class RemovedItemsComponent {
  public posts$: Observable<Posts[]>;
  public photos$: Observable<Photos[]>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.pipe(select(getPosts));
    this.photos$ = this.store.pipe(select(getPhotos))
  }
}
