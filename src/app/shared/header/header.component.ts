import { Component } from '@angular/core';
import { MaterialModule } from '../../page/style/material/material.module';
import { PrimeNgModule } from '../../page/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
