import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BCheckoutPageComponent } from './pages/buyer/b-checkout-page/b-checkout-page.component';
import { BPaymentPageComponent } from './pages/buyer/b-payment-page/b-payment-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';
import { BMyOrdersPageComponent } from './pages/buyer/b-my-orders-page/b-my-orders-page.component';

import { SDashboardPageComponent } from './pages/seller/s-dashboard-page/s-dashboard-page.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      // title: 'Home - audiBCA',
    },
  }, {
    path: 'home',
    component: BHomePageComponent,
    data: {},
  }, {
    path: 'catalog',
    component: BCatalogPageComponent,
    data: {},
  }, {
    path: 'my-orders',
    component: BMyOrdersPageComponent,
    data: {},
  }, {
    path: 'product-detail/:id',
    component: BProductDetailPageComponent,
    data: {},
  }, {
    path: 'cart',
    component: BCartPageComponent,
    data: {},
  }, {
    path: 'checkout',
    component: BCheckoutPageComponent,
    data: {},
  }, {
    path: 'payment',
    component: BPaymentPageComponent,
    data: {},
  }, {
    path: 'seller/dashboard',
    component: SDashboardPageComponent,
    data: {},
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
