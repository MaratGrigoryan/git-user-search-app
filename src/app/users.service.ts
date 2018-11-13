import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient ) { 
  }

  getUser(username: string):Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}?client_id=797dd4f7fdb3b5b59870&client_secret=17e9c94f6b86eb86a924817038eaab69727ac34c`)
    .pipe(map((response: Response)=> response))
  }
}
    