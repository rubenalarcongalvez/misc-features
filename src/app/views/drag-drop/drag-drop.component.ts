import { ChangeDetectorRef, Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Product, ProductService } from '../../shared/services/products.service';

@Component({
  selector: 'app-drag-drop',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  providers: [ProductService],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  sourceProducts!: Product[];
  targetProducts!: Product[];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
      this.carService.getProductsSmall().then(products => {
          this.sourceProducts = products;
          this.cdr.markForCheck();
      });
      this.targetProducts = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
