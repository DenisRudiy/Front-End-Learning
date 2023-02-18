import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { LayoutModule } from './components/layout/layout.module'
import { HeaderModule } from './components/header/header.module'

import { AppComponent } from './app.component'
import { FavoritesComponent } from './components/favorites/favorites.component'
import { SaleComponent } from './components/sale/sale.component'
import { ProfileComponent } from './components/profile/profile.component'
import { HomeModule } from './components/home/home.module'

@NgModule({
  declarations: [
    AppComponent,
    SaleComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
