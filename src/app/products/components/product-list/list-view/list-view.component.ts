import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

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
