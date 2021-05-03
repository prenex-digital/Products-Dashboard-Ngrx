import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { sortingList, SortList, sortEntities } from './../../models/sorting-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  public productsList: [] = [];
  public products$: Observable<Product[]>;
  loading = true;
  public sortBy: string;
  public sortingList = sortingList;
  destroy$: Subject<Product> = new Subject<Product>();
  public isDesc: boolean = false;

  constructor(private productsService: ProductsService, private ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onChange = (event: any) => {
    switch (event) {
      case SortList.NAME: // name
        this.sortBy = sortEntities.name;
        this.isDesc = false;
        break;
      case SortList.PRICEASC: // price ascending
        this.sortBy = sortEntities.price;
        this.isDesc = false;
        break;
      case SortList.PRICEDESC: // price descending
        this.sortBy = sortEntities.price;
        this.isDesc = true;
        break;
    }
    // this.ref.detectChanges();
  }

  ngOnDestroy() {
    this.destroy$.next(undefined);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  private getProducts = () => {
    this.products$ =
      this.productsService
        .getProducts()
        .pipe(
          map(product => product),
          takeUntil(this.destroy$),
          shareReplay()
        );
  }
}
