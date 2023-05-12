import { Component, EventEmitter, Output } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'
import { PaginationService } from 'ngx-pagination'
import { Subscription } from 'rxjs'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [PaginationService, MessageService]
})
export class CartComponent {
  clickEventSubscription!: Subscription
  page = 1
  cartFood: Food[] = []
  totalPrice: number = 0
  showCart: boolean = false
  sidebar!: boolean
  hidePaginate: boolean = true

  constructor(
    private service: FoodService,
    private messageService: MessageService
  ) {
    this.clickEventSubscription = this.service
      .getToCart()
      .subscribe((data: Food) => {
        let toAdd = true
        for (let i = 0; i < this.cartFood.length; i++) {
          if (this.cartFood[i].id == data.id) {
            toAdd = false
            if (this.cartFood[i].count < 9) {
              data.count += 1
              this.totalPrice += data.price
            }
          }
        }
        if (toAdd) {
          data.count = 1
          this.cartFood.push(data)
          this.totalPrice += data.price
        }
        if (this.cartFood.length > 6) {
          this.hidePaginate = false
        }
        this.showCart = true
      })
  }

  onDelete(item: Food) {
    for (let i = 0; i < this.cartFood.length; i++) {
      if (this.cartFood[i].id == item.id) {
        this.totalPrice -= item.price * item.count
        this.cartFood.splice(i, 1)
      }
    }
    if (this.cartFood.length == 0) {
      this.showCart = false
    }
    if (this.cartFood.length % 6 == 0 && this.page != 1) {
      this.page -= 1
    }
    if (this.cartFood.length < 7) {
      this.hidePaginate = true
    }
  }
  onPlus(item: Food) {
    if (item.count < 9) {
      item.count += 1
      this.totalPrice += item.price
    }
  }
  onMinus(item: Food) {
    if (item.count > 1) {
      item.count -= 1
      this.totalPrice -= item.price
    }
  }

  @Output() changeVisible = new EventEmitter<boolean>()
  closeSidebar() {
    this.changeVisible.emit(this.sidebar)
  }

  onBuy() {
    this.totalPrice = 0
    this.cartFood.splice(0)
    this.showCart = false
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Thank you for order)'
    })
  }
}
