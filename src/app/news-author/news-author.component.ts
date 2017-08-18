import { CacheService } from './../cache.service';
import { HackerNewsService } from './../hackernews.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-author',
  templateUrl: './news-author.component.html',
  styleUrls: ['./news-author.component.scss']
})
export class NewsAuthorComponent implements OnInit {

  user: any;

  @Input()
  set id(id: string) {
    this.user = this.cacheService.get(id, this.hackerNewsService.getUser(id));
  };

  constructor(
    private hackerNewsService: HackerNewsService,
    private cacheService: CacheService
  ) { }

  ngOnInit() {

  }

}
