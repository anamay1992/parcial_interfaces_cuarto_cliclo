import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () =>
      import('./product/product.routes').then(m => m.productRoutes)
  }
];