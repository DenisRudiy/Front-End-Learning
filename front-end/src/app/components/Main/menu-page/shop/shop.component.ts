import { Component, OnInit } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  food!: Food[]
  page: number = 1
  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.food = data
    })
  }
}
