import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { devTools }             from '@ngneat/elf-devtools';
import { EffectsNgModule }      from '@ngneat/effects-ng';
import { ProductEffects }       from './+state/product.effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsNgModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('construct');
    devTools();
  }
}
