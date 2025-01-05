import { Component, computed, OnInit, signal } from '@angular/core';
import { NavComponent } from "../../layout/nav/nav.component";
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { Products } from '../../interfaces/interfaces';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavServiceService } from '../../services/nav-service.service';
import { CommonModule } from '@angular/common';
import { products } from '../../data/data';
import { filter } from 'rxjs'; // For filtering router events

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavComponent, ProductCardComponent, TranslateModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  currentPath = signal<string>('');
  itemCategories = signal<string[]>([]);
  selectedCategory = signal<string | null>(null); // Signal for the selected category
  products: Products = products;

  fabricCategories = ['cotton', 'silk', 'others'];
  makhawerCategories = ['women', 'girls', 'kids'];
  abayaCategories = ['abaya', 'scarves'];
  internationalDesignsCategories = ['western', 'eastern', 'asian', 'morocco'];

  showFabricDropdown = computed(() => this.currentPath().includes('fabric'));
  showMakhawerDropdown = computed(() => this.currentPath().includes('makhawer'));
  showAbayaDropdown = computed(() => this.currentPath().includes('abaya'));
  showInternationalDesignsDropdown = computed(() => this.currentPath().includes('internationalDesigns'));

  // Computed property for filtered products
  filteredProducts = computed(() => {
    const path = this.currentPath();
    const category = this.selectedCategory();
    const allProducts = this.products[path as keyof Products] || [];
    return category ? allProducts.filter(item => item.category === category) : allProducts;
  });

  constructor(private router: Router, private navService: NavServiceService) { }

  ngOnInit(): void {
    // Set the initial current path from the router URL
    this.currentPath.set(this.router.url.slice(1));

    // Set item categories for the current path
    this.itemCategories.set(
      this.navService.getSubItems(this.currentPath()).map(material => material.name)
    );

    // Listen to router events and update currentPath signal when the URL changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Only listen for NavigationEnd event
    ).subscribe(() => {
      const path = this.router.url.slice(1); // Remove the leading slash
      this.currentPath.set(path); // Update the signal with the new path
    });
  }

  // Set the selected category for filtering
  filterByCategory(category: string): void {
    this.selectedCategory.set(category);
  }
}
