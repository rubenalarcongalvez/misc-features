import { Component } from '@angular/core';
import { MaterialModule } from '../../page/style/material/material.module';
import { PrimeNgModule } from '../../page/style/prime-ng/prime-ng.module';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  primeNGSidebarVisible: boolean = false;
}
