import { Component, OnInit } from '@angular/core'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false
  dialogVisible: boolean = false

  constructor(private service: FoodService) {}

  ngOnInit(): void {}

  changeVisible() {
    this.sidebarVisible = false
  }
}
