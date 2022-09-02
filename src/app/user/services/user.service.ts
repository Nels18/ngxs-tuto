import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  fetchUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUsers(userData: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  updateUser(userData: any, userId: number): Observable<any> {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${userId}`, userData);
  }
}
