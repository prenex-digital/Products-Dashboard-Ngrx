import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, pipe, Subject } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/reducers';
import { Posts } from '../../models/posts';
import { DashboardService } from '../../services/dashboard.service';
import { storePosts } from './../../../store/actions/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts$: Observable<Posts[]>;
  destroy$: Subject<Posts[]> = new Subject<Posts[]>();

  constructor(
    private dashboardService: DashboardService,
    private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.dashboardService.getAllPosts()
      .pipe(
        map(posts => posts),
        takeUntil(this.destroy$),
        shareReplay()
      )
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    this.destroy$.unsubscribe();
  }

  removePost = (post: Posts, posts: Posts[]) => {
    this.store.dispatch(storePosts({ posts: post }));
    let filteredData: Posts[] = posts.filter(pos => pos.id !== post.id);
    if(filteredData && filteredData.length>0) {
      this.posts$ = of(filteredData);
    }
  }

//   updateOrder(id) {
//     for(item in orderPreparing) {
//         if(item[id] == id) {
//             delete this.orderPreparing.item;
//         }
//     }
// }

}
