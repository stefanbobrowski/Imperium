import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _dataService: DataService) { }


}
