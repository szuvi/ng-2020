import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './shop/category-selector/category-selector.component';
import { ProductsListComponent } from './shop/products-list/products-list.component';
import { SortPipe } from './sort.pipe';
import { ShopComponent } from './shop/shop.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AgeVerificationComponent,
    CategorySelectorComponent,
    ProductsListComponent,
    SortPipe,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'age-verification', component: AgeVerificationComponent },
      { path: 'shop', component: ShopComponent },
      { path: '', redirectTo: '/age-verification', pathMatch: 'full' },
      { path: '**', redirectTo: '/age-verification' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
