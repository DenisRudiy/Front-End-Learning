import { Component, OnInit } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-filler',
  templateUrl: './filler.component.html',
  styleUrls: ['./filler.component.scss']
})
export class FillerComponent implements OnInit {
  food: Food[] = []
  menuList: Food[] = []

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.food = data
      this.menuList = this.food.filter((f) => f.foods_id.length > 1)
    })
  }
}
