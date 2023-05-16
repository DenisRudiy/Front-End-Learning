import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  clickEventSubscription!: Subscription
  food!: Food[]
  page: number = 1
  visible!: boolean
  currentItem!: Food
  filteredFood!: Food[]
  show: boolean = false
  isDarkMode = false
  lang: string = 'eng'

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.food = data
      this.filteredFood = data
    })
    const storedLang = localStorage.getItem('language')
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }
  }

  showDialog() {
    this.visible = true
  }
  getItem(item: Food) {
    this.currentItem = item
    this.showDialog()
  }

  filterItems(filter: string) {
    this.page = 1
    if (filter === '') {
      this.filteredFood = this.food
    } else {
      this.filteredFood = this.food.filter((f) => f.type === filter)
    }
  }

  ToCart(data: Food) {
    this.service.sendToCart(data)
  }
}
