import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  badgeContent: string = 'X';
}
