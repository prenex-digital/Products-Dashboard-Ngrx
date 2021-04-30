import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/home/dashboard.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { RemovedItemsComponent } from './components/removed-items/removed-items.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsListComponent,
    PhotosListComponent,
    RemovedItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
