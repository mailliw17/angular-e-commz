import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './components/main-app/main-app.component';

const routes: Routes = [  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full',
  data: {
    // title: 'Home - audiBCA',
  },
},
{
  path: 'home',
  component: MainAppComponent,
  data: {
    // title: 'Home - audiBCA',
  },
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
