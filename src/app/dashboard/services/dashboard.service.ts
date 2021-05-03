import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { Photos } from '../models/photos';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private api: ApiService) { }

  getAllPosts = (): Observable<Posts[]> => {
    const http$ = this.api.get(`${environment.api.url}posts`);

    return http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map((res: any) => res)
      )
  }

  getAllPhotos = (): Observable<Photos[]> => {
    const http$ = this.api.get(`${environment.api.url}photos`);

    return http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map((res: any) => res)
      )
  }
}
