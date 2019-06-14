import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import 'materialize-css';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './splash-page/left-sidebar/left-sidebar.component';
import { SplashPageComponent } from './splash-page/splash-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    LeftSidebarComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
