import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  value: number = 50;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
