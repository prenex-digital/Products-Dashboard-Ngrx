import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { sortingList, SortList, sortEntities } from './../../models/sorting-list';
import { FilterList, FilteringList, filterList, filterEntities } from './../../models/filter-list';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  public productsList: [] = [];
  public products$: Observable<Product[]>;
  public loading = true;
  public sortBy: string;
  public filterBy: string;
  public sortingList = sortingList;
  public filterList = filterList;
  destroy$: Subject<Product> = new Subject<Product>();
  public isDesc: boolean = false;
  public errorMsg: string;

  constructor(private productsService: ProductsService, private ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSort = (event: any) => {
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
  }

  onFilter = (event: any) => {
    switch (event) {
      case FilterList.PRICE: // price
        this.filterBy = filterEntities.price;
        break;
      case FilterList.SIZE: // size
        this.filterBy = filterEntities.size;
        break;
    }
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
          catchError(error => {
            if (error.error instanceof ErrorEvent) {
              this.errorMsg = `Error: ${error.error.message}`;
            } else {
              this.errorMsg = this.getServerErrorMessage(error);
            }
            return throwError(this.errorMsg);
          }),
          map(product => product),
          tap(() => this.loading = false),
          takeUntil(this.destroy$),
          shareReplay()
        );
  }

  /*
  * Deal with the errors
  */
  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }
}
