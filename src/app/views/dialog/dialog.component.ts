import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MatDialog } from '@angular/material/dialog';
import { DialogAngularMaterialComponent } from './dialog-angular-material/dialog-angular-material.component';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  visiblePrimeNG: boolean = false;
  readonly dialog = inject(MatDialog);

  openDialogMaterial() {
    this.dialog.open(DialogAngularMaterialComponent);
  }

  showDialogPrimeNG() {
      this.visiblePrimeNG = true;
  }
}
