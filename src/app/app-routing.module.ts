import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BCheckoutPageComponent } from './pages/buyer/b-checkout-page/b-checkout-page.component';
import { BPaymentPageComponent } from './pages/buyer/b-payment-page/b-payment-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';
import { BMyOrdersPageComponent } from './pages/buyer/b-my-orders-page/b-my-orders-page.component';
import { MyOrderDetailPageComponent } from './pages/buyer/my-order-detail-page/my-order-detail-page.component';

import { SDashboardPageComponent } from './pages/seller/s-dashboard-page/s-dashboard-page.component';
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
import { SDummyContentComponent } from './components/seller/s-dummy-content/s-dummy-content.component';

const routes: Routes = [  
  {
    path: 'login',
    component: LoginPageComponent,
    data: {},
  }, {
    path: 'register',
    component: RegisterPageComponent,
    data: {},
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {},
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
    path: 'my-order-detail/:id',
    component: MyOrderDetailPageComponent,
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
  },
  
  {
    path: 'seller/dashboard',
    component: SDashboardPageComponent,
    data: {},
  }, {
    path: 'seller/manage-product',
    component: SManageProductPageComponent,
    data: {},
  },  {
    path: 'seller/simple-report',
    component: SSimpleReportPageComponent,
    data: {},
  }, {
    path: 'seller/add-product',
    component: SAddProductPageComponent,
    data: {},
  }, {
    path: 'seller/edit-product/:id',
    component: SEditProductPageComponent,
    data: {},
  }, {
    path: 'seller/manage-order',
    component: SOrderPageComponent,
    data: {},
  },{
    path: 'seller/article',
    component: SDummyContentComponent,
    data: {},
  }, 
  {
    path: 'seller/detail-order/:id',
    component: SOrderDetailPageComponent,
    data: {},
  },{
    path: 'seller/profile/:id',
    component: SProfilePageComponent,
    data: {},
  }, {
    path: 'seller/change-password/:id',
    component: SChangePasswordPageComponent,
    data: {},
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
