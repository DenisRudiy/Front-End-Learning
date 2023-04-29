import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

//  Apps Imports
import { AppComponent } from './app.component'
import { FooterComponent } from './components/Main/footer/footer.component'
import { HeaderComponent } from './components/Main/header/header.component'
import { RegistrationComponent } from './components/Additional/registration/registration.component'
import { LoginComponent } from './components/Additional/login/login.component'

//  PrimeNG Imports
import { AvatarModule } from 'primeng/avatar'
import { MainComponent } from './components/Main/main/main.component'
import { ProdListComponent } from './components/Main/prod-list/prod-list.component'
import { MenuListComponent } from './components/Main/menu-list/menu-list.component'
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from './components/main/banner/banner.component'

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
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AvatarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
