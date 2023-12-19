import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NormalizeStringsComponent } from './views/normalize-strings/normalize-strings.component';
import { PrintCustomPageComponent } from './views/print-custom-page/print-custom-page.component';
import { ChangeIconWithTsComponent } from './views/change-icon-with-ts/change-icon-with-ts.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},

    {path: 'print-custom-page', component: PrintCustomPageComponent},
    {path: 'change-icon-with-typescript', component: ChangeIconWithTsComponent},
    {path: 'normalize-strings', component: NormalizeStringsComponent},
    
    {path: '**', redirectTo: ''}
];
