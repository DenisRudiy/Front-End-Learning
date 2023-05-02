import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'

//  Apps Imports
import { AppComponent } from './app.component'
import { FooterComponent } from './components/Main/footer/footer.component'
import { HeaderComponent } from './components/Main/header/header.component'
import { RegistrationComponent } from './components/Additional/registration/registration.component'
import { LoginComponent } from './components/Additional/login/login.component'

//  PrimeNG Imports
import { AvatarModule } from 'primeng/avatar'
import { MainComponent } from './components/Main/main/main.component'
import { ProdListComponent } from './components/Main/home-page/prod-list/prod-list.component'
import { MenuListComponent } from './components/Main/home-page/menu-list/menu-list.component'
import { ButtonModule } from 'primeng/button'
import { BannerComponent } from './components/Main/home-page/banner/banner.component'
import { HomePageComponent } from './components/Main/home-page/home-page.component'
import { MenuPageComponent } from './components/Main/menu-page/menu-page.component'
import { ContactPageComponent } from './components/Main/contact-page/contact-page.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    MainComponent,
    ProdListComponent,
    MenuListComponent,
    BannerComponent,
    HomePageComponent,
    MenuPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    ButtonModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
