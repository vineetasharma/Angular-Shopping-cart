import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '', component: CategoryComponent
  },
  {
    path: 'item', component: ItemComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
