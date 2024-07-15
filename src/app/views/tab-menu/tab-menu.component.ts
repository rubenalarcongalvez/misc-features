import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';
import { MenuItem } from 'primeng/api';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.scss'
})
export class TabMenuComponent {
  items: MenuItem[] | undefined;
  activeIndex: number = 0;

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
    this.selected.setValue(index);
  }
}
