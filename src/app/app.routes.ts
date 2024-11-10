import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ProductsComponent } from './views/products/products.component';
import { SingleProductComponent } from './views/single-product/single-product.component';


export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'products', 
        component: ProductsComponent,
        title: 'Products',
    },
    {
        path: 'single_product', 
        component: SingleProductComponent,
        title: 'Single product',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];