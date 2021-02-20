import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  {
    path: 'wishlist', component: WishlistComponent
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
