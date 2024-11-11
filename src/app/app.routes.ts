import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'products',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'Products',
    },
    {
        path: 'single_product',
        loadComponent: () => import('./views/single-product/single-product.component').then(mod => mod.SingleProductComponent),
        title: 'Single product',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];