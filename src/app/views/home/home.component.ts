import { Component } from '@angular/core';
import { MaterialModule } from '../../page/style/material/material.module';
import { EnumLibraries, GlobalService } from '../../page/services/global.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../page/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, CommonModule, PrimeNgModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  selectedIndex: number = 0;

  constructor(private globalService: GlobalService) {}

  get results() {
    return this.globalService.getResults();
  }

  primeNGWins() {
    return this.results.filter(r => r.winner == EnumLibraries.PrimeNG);
  }
  angularMaterialWins() {
    return this.results.filter(r => r.winner == EnumLibraries['Angular Material']);
  }
  ties() {
    return this.results.filter(r => r.winner == EnumLibraries.Tie);
  }

  winnerOverall(): string {
    if(this.angularMaterialWins() > this.primeNGWins()) {
      return 'Angular Material';
    } else if (this.angularMaterialWins() < this.primeNGWins()) {
      return 'PrimeNG';
    } else {
      return 'Tie';
    }
  }

  selectIndex(feature: string): void {
    this.selectedIndex = this.results.indexOf(this.results.find(r => r.feature == feature)!, 0);
  }

  changeIndexTab($event: any): void {
    this.selectedIndex = $event.index;
  }

  printResults() {
    window.print();
  }
}
