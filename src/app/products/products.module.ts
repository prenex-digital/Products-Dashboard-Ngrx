import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppMaterialModule } from './../app-material.module';
import { ListViewComponent } from './components/product-list/list-view/list-view.component';
import { GridViewComponent } from './components/product-list/grid-view/grid-view.component';
import { ProductRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ListViewComponent,
    GridViewComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProductRoutingModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
