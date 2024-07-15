import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';
import { NgxStarsModule } from 'ngx-stars';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule, NgxStarsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  value: number = 0;

  onRatingSet(value: number): void {
    this.value = value;
  }
}
