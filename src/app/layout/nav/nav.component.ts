import { Component, signal, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NavServiceService } from '../../services/nav-service.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel 
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule, RouterLinkActive, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  constructor(public navService: NavServiceService) { }

  hoveredItem = ''

  onTranslateText() {
    this.navService.onTranslateText();
  }

  hasDropdown(item: string) {
    return this.navService.hasDropdown(item);
  }

  getNavItems() {
    return this.navService.navItems;
  }

  getSubItems(item: string) {
    return this.navService.getSubItems(item);
  }

  selectedCurrency = signal<any>(null);
  dropdownChecked: boolean = false;



  ngOnInit() {
    // Retrieve the selected currency from localStorage if it exists
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency) {
      this.selectedCurrency.set(savedCurrency);
    }
  }

  updateLabel(currencyKey: string, e: Event) {
    e.preventDefault();
    this.selectedCurrency.set(currencyKey);  // Update with the selected currency key
    localStorage.setItem('selectedCurrency', currencyKey);  // Save the selected currency to localStorage
    this.dropdownChecked = false;
  }
}
