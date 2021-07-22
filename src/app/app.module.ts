import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { QuantityInputComponent } from './quantity-input/quantity-input.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    NavBarComponent,
    ProductItemDetailComponent,
    QuantityInputComponent,
    CustomerFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
