import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class RegServiceService {
  private backUrl = 'http://localhost:2311/api/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.backUrl + '/get');
  }

  createUser(guitar: User): Observable<any> {
    return this.http.post(this.backUrl + '/create', guitar);
  }

  updateUser(guitar: User): Observable<Object> {
    return this.http.put(`${this.backUrl + '/update'}/${guitar.id}`, guitar);
  }

  deleteUser(guitar: User): Observable<User[]> {
    return this.http.delete<User[]>(this.backUrl + '/delete/' + guitar.id);
  }
}
