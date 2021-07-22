import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ProductItemDetailComponent } from "./product-item-detail/product-item-detail.component";

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product/:id', component: ProductItemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
