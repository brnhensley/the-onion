import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    return this.articles;
  }

}
