// pagination.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 100; // Replace with the actual total number of items

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    // Fetch data for the new page
  }
}
