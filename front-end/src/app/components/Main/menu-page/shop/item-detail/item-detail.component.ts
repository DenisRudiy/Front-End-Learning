import { Component, Input, OnInit } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item!: Food
  lang: string = 'eng'

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    const storedLang = localStorage.getItem('language')
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }
  }

  ToCart(data: Food) {
    this.service.sendToCart(data)
  }
}
