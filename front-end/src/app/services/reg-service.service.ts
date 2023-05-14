import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'
import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  url = 'http://localhost:3000/users'
  private loginUser = new Subject<User>()

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
  }

  updateUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<User>(`${this.url}/${user.id}`, user, httpOptions)
  }

  setLoginUser(data: User) {
    this.loginUser.next(data)
  }

  getLoginUser(): Observable<User> {
    return this.loginUser.asObservable()
  }
}
