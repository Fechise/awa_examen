import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Acerca } from './acerca/acerca';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'acerca',
        component: Acerca
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
