import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  url = 'http://localhost:3000/users/'

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
  }

  updateUser(guitar: User): Observable<Object> {
    return this.http.put(`${this.url}/${guitar.id}`, guitar)
  }

  deleteUser(guitar: User): Observable<User[]> {
    return this.http.delete<User[]>(this.url + guitar.id)
  }
}
