import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppMaterialModule } from './../app-material.module';
import { ListViewComponent } from './components/product-list/list-view/list-view.component';
import { GridViewComponent } from './components/product-list/grid-view/grid-view.component';
import { ProductRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ListViewComponent,
    GridViewComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProductRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
