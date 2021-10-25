import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { ProductListComponent }     from './product-list/product-list.component';
import { EffectsNgModule }          from '@ngneat/effects-ng';
import { ProductsEffects }          from './+state/products.effects';
import { HttpClientModule }         from '@angular/common/http';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { CartComponent }            from './cart/cart.component';
import { SnackbarComponent }        from './snackbar/snackbar.component';
import { CartListItemComponent }    from './cart/cart-list-item/cart-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    SnackbarComponent,
    CartListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsNgModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
