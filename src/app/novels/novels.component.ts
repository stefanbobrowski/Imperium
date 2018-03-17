import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-novels',
    templateUrl: './novels.component.html',
    styleUrls: ['./novels.component.scss']
})
export class NovelsComponent implements OnInit {
    novels: [any];
    constructor(private _dataService: DataService) {}
    ngOnInit() {
        this._dataService.getNovels().subscribe(novels => {
            this.novels = novels;
        });
    }
}
