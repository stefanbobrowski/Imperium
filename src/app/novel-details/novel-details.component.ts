import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-novel-details',
  templateUrl: './novel-details.component.html',
  styleUrls: ['./novel-details.component.scss']
})
export class NovelDetailsComponent implements OnInit {

  novel: any;
  primarchsInNovel: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getNovelDetails(this.route.snapshot.params['url_title']).subscribe(novel => {
      this.novel = novel;
      console.log(novel);
      console.log(novel.title);
      console.log(novel.primarchs);

      for (const x of this.novel.primarchs) {
        this.primarchsInNovel.push(this._dataService.camelCase(x));
      }
    });
  }
}
