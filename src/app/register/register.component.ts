import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any;
  newUser: User;


  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.newUser = User.CreateDefault();
  }

  registerUser(user: User) {
    this._dataService.registerUser(this.newUser)
      .subscribe(data => {
        this.user = data;
        this.newUser = User.CreateDefault();

        console.log('Added user ' + this.user.username);
      });
  }
}
