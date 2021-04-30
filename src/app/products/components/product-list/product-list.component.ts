import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public displayMode: number = 1;
  public productsList: [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
