import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home.component'
import { FoodItemComponent } from './food-item/food-item.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [HomeComponent, FoodItemComponent],
  imports: [CommonModule, RouterModule]
})
export class HomeModule {}
