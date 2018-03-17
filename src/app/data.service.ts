import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { User } from './models/user';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private loggedIn: boolean = false;
  loggedInUser: any;
  

  constructor(private _http: Http) { }


  isLoggedIn():boolean{
      return this.loggedIn;
  }

  setLoggedIn(isLoggedIn: boolean){
      this.loggedIn = isLoggedIn;
  }

  getNovels() {
    return this._http.get('/api/novels')
      .map(res => res.json());
  }

  getNovelDetails(title) {
    return this._http.get('/api/novels/' + title)
      .map(res => res.json());
  }

  getPrimarchsInNovel(title) {
    return this._http.get('/api/novels/' + title + '/primarchs')
      .map(res => res.json());
  }

  getPrimarchs() {
    return this._http.get('/api/primarchs')
      .map(res => res.json());
  }

  getPrimarchDetails(name) {
    return this._http.get('/api/primarchs/' + name)
      .map(res => res.json());
  }

  registerUser(user: User) {
    return this._http.post('api/register', user)
      .map(res => res.json())
      .map(res => this.loggedInUser = res);
  }

  loginUser(user: User) {
    return this._http.post('api/login', user)
      .map(res => res.json());
  }

  camelCase(str) {
    const string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ')
    .split(' ').reduce((result, word) => result + this.capitalize(word.toLowerCase()));
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  }



}
