import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    }
    // {
    //     path: 'articles/:id',
    //     component:: ArticlesComponent
    // }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);