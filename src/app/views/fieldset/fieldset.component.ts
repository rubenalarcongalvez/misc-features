import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './fieldset.component.html',
  styleUrl: './fieldset.component.scss'
})
export class FieldsetComponent {

}
