import { Component } from '@angular/core';
import { MaterialModule } from '../../../page/style/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-material-sidebar',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './material-sidebar.component.html',
  styleUrl: './material-sidebar.component.scss'
})
export class MaterialSidebarComponent {
  events: string[] = [];
  opened!: boolean;
}
