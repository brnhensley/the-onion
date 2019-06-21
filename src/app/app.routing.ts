import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SplashPageComponent
    },
    {
        path: 'articles',
        component: ArticlesComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);