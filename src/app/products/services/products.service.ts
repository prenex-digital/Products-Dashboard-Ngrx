import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './../models/product';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';

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
