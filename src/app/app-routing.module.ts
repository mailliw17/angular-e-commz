import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BHomePageComponent } from './pages/buyer/b-home-page/b-home-page.component';
import { BCartPageComponent } from './pages/buyer/b-cart-page/b-cart-page.component';
import { BCatalogPageComponent } from './pages/buyer/b-catalog-page/b-catalog-page.component';
import { BProductDetailPageComponent } from './pages/buyer/b-product-detail-page/b-product-detail-page.component';

const routes: Routes = [  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
    data: {
      // title: 'Home - audiBCA',
    },
  },
  {
    path: 'home',
    component: BHomePageComponent,
    data: {
      // title: 'Home - audiBCA',
    },
  },
  {
    path: 'catalog',
    component: BCatalogPageComponent,
    data: {
      // title: 'Home - audiBCA',
    },
  },
  {
    path: 'cart',
    component: BCartPageComponent,
    data: {
      // title: 'Home - audiBCA',
    },
  },
  {
    path: 'product-detail/1',
    component: BProductDetailPageComponent,
    data: {
      // title: 'Home - audiBCA',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
