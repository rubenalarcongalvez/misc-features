import { Component, signal } from '@angular/core';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';
import { MaterialModule } from '../../shared/style/material/material.module';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [PrimeNgModule, MaterialModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  activeIndex: number | undefined = 0;
  readonly panelOpenState = signal(false);

  activeIndexChange(index : any){
      this.activeIndex = index
  }
}
