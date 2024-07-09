import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  first: number = 0;
  rows: number = 10;
  totalRecords: number = 120;

  options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 120, value: 120 }
  ];

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
  }
}
