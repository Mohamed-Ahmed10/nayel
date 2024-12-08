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
        path: 'fabric',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'Fabric',
    },
    {
        path: 'makhawer',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'Makhawer',
    },
    {
        path: 'abaya',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'Abaya',
    },
    {
        path: 'designers',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'Designers',
    },
    {
        path: 'internationalDesigns',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'internationalDesigns',
    },
    {
        path: 'gulfDesignes',
        loadComponent: () => import('./views/products/products.component').then(mod => mod.ProductsComponent),
        title: 'gulf designes',
    },
    {
        path: 'single_product',
        loadComponent: () => import('./views/single-product/single-product.component').then(mod => mod.SingleProductComponent),
        title: 'Single product',
    },
    {
        path: 'cart',
        loadComponent: () => import('./views/cart/cart.component').then(mod => mod.CartComponent),
        title: 'Cart',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];