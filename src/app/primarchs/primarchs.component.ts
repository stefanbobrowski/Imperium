import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-primarchs',
  templateUrl: './primarchs.component.html',
  styleUrls: ['./primarchs.component.scss']
})
export class PrimarchsComponent implements OnInit {

  primarchs: any = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getPrimarchs().subscribe(primarchs => {
      this.primarchs = primarchs;
    });
  }
}
