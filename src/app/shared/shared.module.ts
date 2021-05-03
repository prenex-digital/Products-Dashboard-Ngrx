import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteButtonComponent } from './components/favourite-button/favourite-button.component';
import { AppMaterialModule } from './../app-material.module';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    FavouriteButtonComponent,
    StarRatingsComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    FavouriteButtonComponent,
    StarRatingsComponent,
    OrderByPipe
  ]
})
export class SharedModule { }
