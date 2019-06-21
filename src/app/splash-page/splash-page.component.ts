import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css'],
  providers: [ArticleService]
})

export class SplashPageComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
