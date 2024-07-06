import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-listbox',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.scss'
})
export class ListboxComponent {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  optionsSelected: string[] = [];
}
