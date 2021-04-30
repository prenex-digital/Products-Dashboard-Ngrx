import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product",
    loadChildren: (): Promise<void | ProductsModule> =>
      import('./products/products.module').then(
        (m) => m.ProductsModule
      )
  },
  {
    path: "dashboard",
    loadChildren: (): Promise<void | DashboardModule> =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      )
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
