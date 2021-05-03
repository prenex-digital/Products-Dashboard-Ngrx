import { Component, OnInit } from '@angular/core';
import { Observable, pipe, Subject } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { Posts } from '../../models/posts';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public posts$: Observable<Posts[]>;
  destroy$: Subject<Posts[]> = new Subject<Posts[]>();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.posts$ = this.dashboardService.getAllPosts()
      .pipe(
        map(posts => posts),
        takeUntil(this.destroy$),
        shareReplay()
      )

      this.posts$.subscribe((ss)=>{
        console.log('JASDFJASJDFJASD', ss);
      });

  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
