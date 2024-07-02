import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  items: string[] = [];

  onChipEdit(item: any, index: number) {
    const newItemValue = prompt('Edit item:', item);
    if (newItemValue !== null && newItemValue !== '') {
      this.items[index] = newItemValue;
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our item
    if (value) {
      this.items.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
  
  remove(item: string) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  edit(item: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove item if it no longer has a name
    if (!value) {
      this.remove(item);
      return;
    }

    // Edit existing item
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items[index] = value;
      return [...this.items];
    }
    return this.items;
  }
}
