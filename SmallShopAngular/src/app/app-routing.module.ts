import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FavoritesComponent } from './components/favorites/favorites.component'
import { HomeComponent } from './components/home/home.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SaleComponent } from './components/sale/sale.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
