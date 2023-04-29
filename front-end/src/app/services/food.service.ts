import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Food } from '../interfaces/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/food'

  getAll() {
    return this.http.get<Food[]>(this.url)
  }
}
