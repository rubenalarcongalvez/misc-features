import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  date: Date = new Date();
}
