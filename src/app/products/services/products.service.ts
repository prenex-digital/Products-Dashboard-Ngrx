import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { Product } from './../models/product';
import { delayWhen, filter, map, retryWhen, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
// import { createHttpObservable } from './util';
import { fromPromise } from 'rxjs/internal-compatibility';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api: ApiService) { }

  private subject = new BehaviorSubject<Product[]>([]);

  courses$: Observable<Product[]> = this.subject.asObservable();


  getProducts = (): Observable<Product[]> => {

    const http$ = this.api.get(`/api/products`);

    return http$
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map((res: any) => res.payload)
      )
  }
}
