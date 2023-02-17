import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaleComponent } from './components/sale/sale.component';
import { LayoutModule } from './components/layout/layout.module';
import { HeaderModule } from './components/header/header.module';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
