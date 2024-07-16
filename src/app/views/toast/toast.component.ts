import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MessageService } from 'primeng/api';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [MaterialModule, PrimeNgModule],
  providers: [MessageService],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  durationInSeconds = 5;
  visible: boolean = false;

  constructor(private messageService: MessageService, private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 0,
      verticalPosition: 'top',
    });
  }

  showConfirm() {
      if (!this.visible) {
          this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?', detail: "Please, it is really important as our enterprise would be collapsed if you do not do it in a maximum of 2 hours." });
          this.visible = true;
      }
  }

  onConfirm() {
      this.messageService.clear('confirm');
      this.visible = false;
  }

  onReject() {
      this.messageService.clear('confirm');
      this.visible = false;
  }
}

@Component({
  selector: 'snack-bar-component-example',
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: 'snack-bar-component-example/snack-bar-component-example.component.html',
  styles: `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  standalone: true,
})
export class PizzaPartyComponent {
  snackBarRef = inject(MatSnackBarRef);
}
