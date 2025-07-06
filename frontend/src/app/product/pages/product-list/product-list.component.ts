import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.products = data;
    });
  }

  create(): void {
    this.router.navigate(['/products/new']);
  }

  edit(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.ngOnInit());
  }

  getTipoProducto(price: number): string {
    const precio = Math.round(price);
    if (precio === 0) return 'Gratis';
    if (precio === 100) return 'Oferta';
    return 'Regular';
  }
}