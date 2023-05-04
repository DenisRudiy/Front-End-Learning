import { Component, Input} from '@angular/core'
import { Food } from 'src/app/interfaces/food'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  @Input() item!: Food
}
