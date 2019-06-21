import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [ArticleService]
})
export class ArticlesComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private articleService: ArticleService) {
    this.articles = articleService.getArticles();

    this.articles.subscribe(items => {
    });

  }

  ngOnInit() {
  }

}
