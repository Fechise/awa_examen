import { Routes } from '@angular/router';
import { Acerca } from './acerca/acerca';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: Home, title: 'Home'},
    {path: 'acerca', component: Acerca, title: 'Acerca'}
];
