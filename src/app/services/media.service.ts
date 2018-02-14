import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../interfaces/user';

@Injectable()
export class MediaService {

  username: string;
  password: string;
  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  status: string;
  file: File;
  title: string;
  description: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login() {
    const body = {
      username: this.username,
      password: this.password
    };

    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    this.http.post(this.apiUrl + '/login', body, settings).subscribe(response => {
      localStorage.setItem('token', response['token']);
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      this.status = error.error.message;
    });
  }

  public register(user: User) {
    const settings = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    return this.http.post(this.apiUrl + '/users', user, settings);
  }

  public startUpload(formData: FormData) {
    const settings = {
      headers: new HttpHeaders()
        .set('x-access-token', localStorage.getItem('token'))
    };
    return this.http.post(this.apiUrl + '/media', formData, settings);

  }

  public getUserData() {
    const settings = {
      headers: new HttpHeaders().set('x-access-token', localStorage.getItem('token'))
    };
    return this.http.get(this.apiUrl + '/users/user', settings);
  }

  public getNewFiles() {
    const start = 0;
    const limit = 10;

    return this.http.get(this.apiUrl + `/media?start=${start}&limit=${limit}`);
  }
}
