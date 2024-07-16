import { Component, inject } from '@angular/core';
import { PrimeNgModule } from '../../../shared/style/prime-ng/prime-ng.module';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-component-example',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './snack-bar-component-example.component.html',
  styleUrl: './snack-bar-component-example.component.scss'
})
export class SnackBarComponentExampleComponent {
  snackBarRef = inject(MatSnackBarRef);
}
