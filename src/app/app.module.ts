import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { BDummyContentComponent } from './components/buyer/b-dummy-content/b-dummy-content.component';
import { BHeaderComponent } from './components/buyer/b-header/b-header.component';
import { BFooterComponent } from './components/buyer/b-footer/b-footer.component';
import { SDummyContentComponent } from './components/seller/s-dummy-content/s-dummy-content.component';
import { SHeaderComponent } from './components/seller/s-header/s-header.component';
import { SFooterComponent } from './components/seller/s-footer/s-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAppComponent,
    BDummyContentComponent,
    BHeaderComponent,
    BFooterComponent,
    SDummyContentComponent,
    SHeaderComponent,
    SFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
