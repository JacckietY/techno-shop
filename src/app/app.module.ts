import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductCardComponent } from './base-components/product-card/product-card.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { LoginPopupComponent } from './base-components/login-popup/login-popup.component';
import { SigninPopupComponent } from './base-components/signin-popup/signin-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShoppingCartComponent,
    CatalogueComponent,
    ProductCardComponent,
    AccountPageComponent,
    LoginPopupComponent,
    SigninPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
