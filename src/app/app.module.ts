import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BHeaderComponent } from './components/buyer/b-header/b-header.component';
import { BFooterComponent } from './components/buyer/b-footer/b-footer.component';
import { BProductCardComponent } from './components/buyer/b-product-card/b-product-card.component';

import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BCheckoutPageComponent } from './pages/buyer/b-checkout-page/b-checkout-page.component';
import { BPaymentPageComponent } from './pages/buyer/b-payment-page/b-payment-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';
import { BMyOrdersPageComponent } from './pages/buyer/b-my-orders-page/b-my-orders-page.component';
import { MyOrderDetailPageComponent } from './pages/buyer/my-order-detail-page/my-order-detail-page.component';

import { SDummyContentComponent } from './components/seller/s-dummy-content/s-dummy-content.component';
import { SHeaderComponent } from './components/seller/s-header/s-header.component';
import { SFooterComponent } from './components/seller/s-footer/s-footer.component';

import { SDashboardPageComponent } from './pages/seller/s-dashboard-page/s-dashboard-page.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { SManageProductPageComponent } from './pages/seller/s-manage-product-page/s-manage-product-page.component';
import { SProfilePageComponent } from './pages/seller/s-profile-page/s-profile-page.component';
import { SChangePasswordPageComponent } from './pages/seller/s-change-password-page/s-change-password-page.component';
import { SSimpleReportPageComponent } from './pages/seller/s-simple-report-page/s-simple-report-page.component';
import { SAddProductPageComponent } from './pages/seller/s-add-product-page/s-add-product-page.component';
import { SEditProductPageComponent } from './pages/seller/s-edit-product-page/s-edit-product-page.component';
import { SOrderPageComponent } from './pages/seller/s-order-page/s-order-page.component';
import { SOrderDetailPageComponent } from './pages/seller/s-order-detail-page/s-order-detail-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,

    BHeaderComponent,
    BFooterComponent,
    BProductCardComponent,

    BHomePageComponent,
    BCartPageComponent,
    BCatalogPageComponent,
    BCheckoutPageComponent,
    BPaymentPageComponent,
    BProductDetailPageComponent,
    BMyOrdersPageComponent,

    SDummyContentComponent,
    SHeaderComponent,
    SFooterComponent,

    SDashboardPageComponent,

    CurrencyPipe,

    SManageProductPageComponent,

    SProfilePageComponent,

    SChangePasswordPageComponent,

    SSimpleReportPageComponent,

    SAddProductPageComponent,

    SEditProductPageComponent,

    SOrderPageComponent,

    SOrderDetailPageComponent,

    LoginPageComponent,

    RegisterPageComponent,

    MyOrderDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
