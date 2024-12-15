import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./currency-converter/currency-converter.page').then((m) => m.CurrencyConverterPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'currency-converter',
    loadComponent: () => import('./currency-converter/currency-converter.page').then( m => m.CurrencyConverterPage)
  },
];
