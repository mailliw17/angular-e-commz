import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BHeaderComponent } from './components/buyer/b-header/b-header.component';
import { BFooterComponent } from './components/buyer/b-footer/b-footer.component';
import { SDummyContentComponent } from './components/seller/s-dummy-content/s-dummy-content.component';
import { SHeaderComponent } from './components/seller/s-header/s-header.component';
import { SFooterComponent } from './components/seller/s-footer/s-footer.component';
import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BProductCardComponent } from './components/buyer/b-product-card/b-product-card.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';
import { SDashboardPageComponent } from './pages/seller/s-dashboard-page/s-dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BHeaderComponent,
    BFooterComponent,
    SDummyContentComponent,
    SHeaderComponent,
    SFooterComponent,
    BHomePageComponent,
    BCartPageComponent,
    BProductCardComponent,
    BCatalogPageComponent,
    BProductDetailPageComponent,
    SDashboardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
