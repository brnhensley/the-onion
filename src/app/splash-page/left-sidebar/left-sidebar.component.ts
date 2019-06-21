import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
  providers: [ArticleService]
})
export class LeftSidebarComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private articleService: ArticleService) {
    this.articles = articleService.getArticles();

    this.articles.subscribe(items => {
      console.log("left sidebar log");
      console.log(items);

    });

  }

  ngOnInit() {
  }

}
