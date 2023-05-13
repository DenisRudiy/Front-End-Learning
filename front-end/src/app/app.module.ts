import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { NgxPaginationModule } from 'ngx-pagination'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//  Components Imports
import { AppComponent } from './app.component'
import { FooterComponent } from './components/Main/footer/footer.component'
import { HeaderComponent } from './components/Main/header/header.component'
import { BannerComponent } from './components/Main/home-page/banner/banner.component'
import { HomePageComponent } from './components/Main/home-page/home-page.component'
import { MenuPageComponent } from './components/Main/menu-page/menu-page.component'
import { ShopComponent } from './components/Main/menu-page/shop/shop.component'
import { MainComponent } from './components/Main/main/main.component'
import { ProdListComponent } from './components/Main/home-page/prod-list/prod-list.component'
import { MenuListComponent } from './components/Main/home-page/menu-list/menu-list.component'
import { FillerComponent } from './components/filler/filler.component'
import { ItemDetailComponent } from './components/Main/menu-page/shop/item-detail/item-detail.component'
import { CartComponent } from './components/Main/cart/cart.component'
import { UserPageComponent } from './components/Main/user-page/user-page.component'
import { RegistrationComponent } from './components/Main/user-page/registration/registration.component'

//  PrimeNG Imports
import { AvatarModule } from 'primeng/avatar'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { SidebarModule } from 'primeng/sidebar'
import { ToastModule } from 'primeng/toast'
import { StyleClassModule } from 'primeng/styleclass'
import { InputMaskModule } from 'primeng/inputmask'
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './components/Main/user-page/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProdListComponent,
    MenuListComponent,
    BannerComponent,
    HomePageComponent,
    MenuPageComponent,
    ShopComponent,
    FillerComponent,
    ItemDetailComponent,
    CartComponent,
    UserPageComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    ButtonModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    NgxPaginationModule,
    DialogModule,
    BrowserAnimationsModule,
    SidebarModule,
    ToastModule,
    StyleClassModule,
    InputMaskModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
