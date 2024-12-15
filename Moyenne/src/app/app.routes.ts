import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: 'home',
    loadComponent: () => import('./moyenne/moyenne.page').then((m) => m.MoyennePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 
];
