import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MaterialSidebarComponent } from './views/sidebar/material-sidebar/material-sidebar.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'material-sidebar', component: MaterialSidebarComponent},
    {path: '**', redirectTo: ''}
];
