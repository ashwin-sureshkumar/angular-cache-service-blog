import { CacheService } from './cache.service';
import { HackerNewsService } from './hackernews.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './infinite-scroller.directive';
import { NewsAuthorComponent } from './news-author/news-author.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective,
    NewsAuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HackerNewsService, CacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
