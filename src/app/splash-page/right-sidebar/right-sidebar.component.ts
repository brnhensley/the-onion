import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  providers: [ArticleService]
})
export class RightSidebarComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private articleService: ArticleService) {
    this.articles = articleService.getArticles();

    this.articles.subscribe(items => {
    });
  }

  ngOnInit() {
  }

}
