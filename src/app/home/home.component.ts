import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  novels: any = [];
  primarchs: any = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getNovels().subscribe(novels => {
      this.novels = novels;
    });

    this._dataService.getPrimarchs().subscribe(primarchs => {
      this.primarchs = primarchs;
    });
  }

}
