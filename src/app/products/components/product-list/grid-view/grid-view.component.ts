import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {

  @Input()
  products: Product[] = [];

  @Input()
  sortBy: string;

  @Input()
  isDesc?: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  selectedChange = (event: any) => {
    console.log('Selected changed', event);
  }
}
