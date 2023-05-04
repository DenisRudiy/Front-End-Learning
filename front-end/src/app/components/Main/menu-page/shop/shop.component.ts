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
  visible!: boolean
  currentItem!: Food
  filteredFood!: Food[]

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.food = data
      this.filteredFood = data
    })
  }

  showDialog() {
    this.visible = true
  }
  getItem(item: Food) {
    this.currentItem = item
    this.showDialog()
  }

  filterItems(filter: string) {
    if (filter === '') {
      this.filteredFood = this.food
    } else {
      this.filteredFood = this.food.filter((f) => f.type === filter)
    }
  }
}
