import { HttpClientModule }         from '@angular/common/http';
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { EffectsNgModule }          from '@ngneat/effects-ng';
import { ProductEffects }           from './+state/product/product.effects';
import { UiEffects }                from './+state/ui/ui.effects';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { CartListItemComponent }    from './cart/cart-list-item/cart-list-item.component';
import { CartComponent }            from './cart/cart.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { ProductListComponent }     from './product-list/product-list.component';
import { SnackbarComponent }        from './snackbar/snackbar.component';

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
    EffectsNgModule.forRoot([ProductEffects, UiEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
