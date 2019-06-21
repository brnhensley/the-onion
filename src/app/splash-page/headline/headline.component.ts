import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
  providers: [ArticleService]
})
export class HeadlineComponent implements OnInit {
  articles: FirebaseListObservable<any[]>;

  constructor(private articleService: ArticleService) {
    this.articles.subscribe( items => {
    })

  }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

}
