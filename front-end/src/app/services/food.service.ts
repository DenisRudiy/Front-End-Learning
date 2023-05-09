import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Food } from '../interfaces/food'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private itemToCart = new Subject<Food>()

  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/food'

  getAll() {
    return this.http.get<Food[]>(this.url)
  }

  sendToCart(data: Food) {
    this.itemToCart.next(data)
  }

  getToCart(): Observable<Food> {
    return this.itemToCart.asObservable()
  }
}
