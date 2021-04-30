import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppMaterialModule } from './../app-material.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
