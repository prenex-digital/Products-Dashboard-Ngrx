import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/home/dashboard.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { RemovedItemsComponent } from './components/removed-items/removed-items.component';
import { AppMaterialModule } from './../app-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsListComponent,
    PhotosListComponent,
    RemovedItemsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
