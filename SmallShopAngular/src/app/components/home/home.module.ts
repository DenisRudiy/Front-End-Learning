import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FoodItemComponent } from './food-item/food-item.component';



@NgModule({
  declarations: [
    HomeComponent,
    FoodItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
