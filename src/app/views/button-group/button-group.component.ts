import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

@Component({
  selector: 'app-button-group',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.scss'
})
export class ButtonGroupComponent {

}
