import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-splitter',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './splitter.component.html',
  styleUrl: './splitter.component.scss'
})
export class SplitterComponent {

}
