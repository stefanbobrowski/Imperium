import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-primarch-details',
  templateUrl: './primarch-details.component.html',
  styleUrls: ['./primarch-details.component.scss']
})
export class PrimarchDetailsComponent implements OnInit {
  primarch: any;
  novelsPrimarchIn: any = [];

    constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { }

    ngOnInit() {
      this._dataService.getPrimarchDetails(this.route.snapshot.params['url_name']).subscribe(primarch => {
        this.primarch = primarch;
        console.log(primarch);
        console.log(primarch.title);
        console.log(primarch.primarchs);

        for (const x of this.primarch.novels) {
          this.novelsPrimarchIn.push(this._dataService.camelCase(x));
        }
      });
    }
}
