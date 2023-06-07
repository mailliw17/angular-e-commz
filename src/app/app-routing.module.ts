import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

// App Components
import { BAppComponent } from './pages/buyer/b-app/b-app.component';
import { SAppComponent } from './pages/seller/s-app/s-app.component';

// Auth & Misc Pages
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/misc/not-found-page/not-found-page.component';

// Buyer Pages
import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BCheckoutPageComponent } from './pages/buyer/b-checkout-page/b-checkout-page.component';
import { BPaymentPageComponent } from './pages/buyer/b-payment-page/b-payment-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';
import { BMyOrdersPageComponent } from './pages/buyer/b-my-orders-page/b-my-orders-page.component';
import { BMyOrderDetailPageComponent } from './pages/buyer/b-my-order-detail-page/b-my-order-detail-page.component';
import { BProfilePageComponent } from './pages/buyer/b-profile-page/b-profile-page.component';
import { BChangePasswordPageComponent } from './pages/buyer/b-change-password-page/b-change-password-page.component';

// Seller Pages
import { SDashboardPageComponent } from './pages/seller/s-dashboard-page/s-dashboard-page.component';
import { SManageProductPageComponent } from './pages/seller/s-manage-product-page/s-manage-product-page.component';
import { SSimpleReportPageComponent } from './pages/seller/s-simple-report-page/s-simple-report-page.component';
import { SAddProductPageComponent } from './pages/seller/s-add-product-page/s-add-product-page.component';
import { SEditProductPageComponent } from './pages/seller/s-edit-product-page/s-edit-product-page.component';
import { SOrderPageComponent } from './pages/seller/s-order-page/s-order-page.component';
import { SOrderDetailPageComponent } from './pages/seller/s-order-detail-page/s-order-detail-page.component';
import { SProfilePageComponent } from './pages/seller/s-profile-page/s-profile-page.component';
import { SChangePasswordPageComponent } from './pages/seller/s-change-password-page/s-change-password-page.component';

// Seller Components
import { SDummyContentComponent } from './components/seller/s-dummy-content/s-dummy-content.component';

const routes: Routes = [
  //relative path
  // kalau ada / di depan path,dia akan buat semua path dibelakang localhost:4200 trus baru tambahin /login
  // kalau gaada / di depan path, dia ga buang current path dan langsung nambah path login di belakang 
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginPageComponent,
  }, {
    path: 'register',
    component: RegisterPageComponent,
  }, {
    path: 'not-found',
    component: NotFoundPageComponent,
  },
  
  {
    path: '',
    component: BAppComponent,
    children: [
      {
        path: 'home',
        component: BHomePageComponent,
      }, {
        path: 'catalog',
        component: BCatalogPageComponent,
      }, {
        path: 'product-detail/:id',
        component: BProductDetailPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'my-orders',
        component: BMyOrdersPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'my-order-detail/:id',
        component: BMyOrderDetailPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'cart',
        component: BCartPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'checkout',
        component: BCheckoutPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'payment',
        component: BPaymentPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'profile/:id',
        component: BProfilePageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      }, {
        path: 'change-password/:id',
        component: BChangePasswordPageComponent,
        canActivate: [AuthGuardService],
        data: {role: 'Buyer'},
      },
    ],
  },

  {
    path: 'seller',
    component: SAppComponent,
    canActivate: [AuthGuardService],
    data: {role: 'Seller'},
    children: [
      {
        path: 'dashboard',
        component: SDashboardPageComponent,
      }, {
        path: 'manage-product',
        component: SManageProductPageComponent,
      },  {
        path: 'simple-report',
        component: SSimpleReportPageComponent,
      }, {
        path: 'add-product',
        component: SAddProductPageComponent,
      }, {
        path: 'edit-product/:id',
        component: SEditProductPageComponent,
      }, {
        path: 'manage-order',
        component: SOrderPageComponent,
      }, {
        path: 'article',
        component: SDummyContentComponent,
      }, {
        path: 'detail-order/:id',
        component: SOrderDetailPageComponent,
      }, {
        path: 'profile/:id',
        component: SProfilePageComponent,
      }, {
        path: 'change-password/:id',
        component: SChangePasswordPageComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
