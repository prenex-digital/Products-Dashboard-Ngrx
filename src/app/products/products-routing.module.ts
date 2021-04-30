import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Route[] = [
  {
    path: '',
    component: ProductListComponent
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ProductRoutingModule {}