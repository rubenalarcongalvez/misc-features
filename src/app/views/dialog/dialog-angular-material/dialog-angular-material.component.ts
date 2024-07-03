import { Component } from '@angular/core';
import { MaterialModule } from '../../../shared/style/material/material.module';

@Component({
  selector: 'app-dialog-angular-material',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-angular-material.component.html',
  styleUrl: './dialog-angular-material.component.scss'
})
export class DialogAngularMaterialComponent {

}
