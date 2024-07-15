import { Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { MaterialModule } from '../../style/material/material.module';
import { PrimeNgModule } from '../../style/prime-ng/prime-ng.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule, SidebarComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  primeNGSidebarVisible: boolean = false;
}
