import { Component, Input } from '@angular/core'
import { IFood } from 'src/app/services/food/food.interface'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent {
  @Input() food: IFood
}
