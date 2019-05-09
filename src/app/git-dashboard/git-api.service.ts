import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitApiService {
  gitUrl: string = 'https://api.github.com/users/'
  constructor(private http: HttpClient) { }

  getData(username: string): Observable<any> {
    this.gitUrl = `${this.gitUrl}${username}`
    return this.http.get<any>(this.gitUrl)
  }
}
