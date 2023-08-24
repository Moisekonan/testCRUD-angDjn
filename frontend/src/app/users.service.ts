import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

type DataService = {
  count: number;
  next: null | string;
  previous: null | string;
  results: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:8000/api/users/'; // URL de l'API

  constructor(private http: HttpClient) { } // Injection de HttpClient

  // Ajouter utilisateur - POST(url+users)
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  // Lister les utilisateurs - GET(url+users)
  getUsers(): Observable<DataService> {
    return this.http.get<DataService>(this.url);
  }

  // Afficher un utilisateur - GET(url+user+id)
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`);
  }

  // Modifier utilisateur - PUT(url+users+id)
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${id}/`, user);
  }

  // Supprimer utilisateur - DELETE(url+users+id)
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}${id}/`);
  }

}