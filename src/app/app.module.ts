import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import 'materialize-css';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './splash-page/left-sidebar/left-sidebar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { RightSidebarComponent } from './splash-page/right-sidebar/right-sidebar.component';
import { HeadlineComponent } from './splash-page/headline/headline.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { ArticlesComponent } from './articles/articles.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    LeftSidebarComponent,
    SplashPageComponent,
    RightSidebarComponent,
    HeadlineComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
