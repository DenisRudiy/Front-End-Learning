import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'

import { HomeComponent } from './home.component'
import { FoodItemComponent } from './food-item/food-item.component'
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [HomeComponent, FoodItemComponent, SearchComponent],
  imports: [CommonModule, RouterModule, FormsModule, MatIconModule]
})
export class HomeModule {}
