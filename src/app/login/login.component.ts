import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUser: User;
  user: any;
  error: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.loginUser = User.CreateDefault();
  }

  login() {
    this.error = '';
    if (this.loginUser.username === '') {
      this.error = 'Please enter a username';
    } else if (this.loginUser.password === '') {
      this.error = 'Please enter a password';
    } else {
      this._dataService.loginUser(this.loginUser)
      .subscribe(data => {

        if(data.username === undefined) {
          console.log(data);
          this.error = data;
        } else {
          this.user = data;
          console.log('Logged in user: ' + this.user.username + ". Here the mongo ID to prove: " + this.user._id);
          this.loginUser = User.CreateDefault();
        }
      });
    }
  }
}
