// pagination_1.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-1',
  templateUrl: './pagination-1.component.html',
  styleUrls: ['./pagination-1.component.css']
})
export class Pagination1Component {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
