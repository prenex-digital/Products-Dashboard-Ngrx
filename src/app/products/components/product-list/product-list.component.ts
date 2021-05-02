import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

interface SortingList {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productsList: [] = [];
  public products$: Observable<Product[]>;
  loading = true;

  sortingList: SortingList[] = [
    { value: '0', viewValue: 'Namse Ascending' },
    { value: '1', viewValue: 'Price Ascending' },
    { value: '2', viewValue: 'Price Descending' }
  ];

  constructor(private productsService: ProductsService) {
    setTimeout(() => {

      this.loading = false;

    }, 2000);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts = () => {
    this.products$ =
      this.productsService
        .getProducts()
        .pipe(
          map(product => product)
        );
  }
}
