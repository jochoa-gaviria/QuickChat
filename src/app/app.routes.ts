import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/QuickChat',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'QuickChat',
        loadChildren: () => import('@qr/qr.module').then(module => module.QrModule)
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
