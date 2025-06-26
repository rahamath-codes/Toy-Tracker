    import { Routes } from '@angular/router';
    import { ToyList } from './toy-list/toy-list';
    import { PageNotFound } from './page-not-found/page-not-found';

    export const routes: Routes = [ 
        {path:'',component: ToyList},
        { path: 'toylist', component: ToyList},
        {path:'addtoy',loadComponent:()=> import('./add-toys/add-toys').then(m => m.AddToys)},
        {path:'**',component:PageNotFound}
    ];
