import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IFood } from 'src/app/services/food/food.interface'
import { FoodService } from 'src/app/services/food/food.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() foods: IFood[]
  @Output() findFoods = new EventEmitter<{ searchTerm: string }>()

  searchTerm = ''

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({ searchTerm: this.searchTerm })
    }
  }
}
