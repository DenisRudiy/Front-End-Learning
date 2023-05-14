import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'
import { PaginationService } from 'ngx-pagination'
import { Subscription } from 'rxjs'
import { MessageService } from 'primeng/api'
import { User } from 'src/app/interfaces/user'
import { RegServiceService } from 'src/app/services/reg-service.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [PaginationService, MessageService]
})
export class CartComponent implements OnInit {
  clickEventSubscription!: Subscription
  page = 1
  cartFood: Food[] = []
  totalPrice: number = 0
  showCart: boolean = false
  sidebar!: boolean
  hidePaginate: boolean = true
  loginUser: User = new User()

  constructor(
    private service: FoodService,
    private messageService: MessageService,
    private regService: RegServiceService
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
    this.clickEventSubscription = this.regService
      .getLoginUser()
      .subscribe((data: User) => {
        localStorage.setItem('loginUser', JSON.stringify(data))
        this.loginUser = data
      })
  }

  ngOnInit(): void {
    const storedLoginUser = localStorage.getItem('loginUser')
    if (storedLoginUser) {
      this.loginUser = JSON.parse(storedLoginUser)
    }
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

  onUpdate() {
    this.regService.updateUser(this.loginUser).subscribe((data) => {})
  }
  setUser() {
    this.regService.setLoginUser(this.loginUser)
  }

  onBuy() {
    if (this.loginUser.status == 'login') {
      if (this.loginUser.balance - this.totalPrice < 0) {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'You have not enough money('
        })
      } else {
        this.loginUser.balance -= this.totalPrice
        this.totalPrice = 0
        this.onUpdate()
        this.setUser()
        this.cartFood.splice(0)
        this.showCart = false
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Thank you for order)'
        })
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'You may login your account to make purchase!'
      })
    }
  }
}
