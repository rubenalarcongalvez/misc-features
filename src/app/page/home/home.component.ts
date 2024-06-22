import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GlobalService, EnumLibraries, Results } from '../../shared/services/global.service';
import { MaterialModule } from '../../shared/style/material/material.module';
import { PrimeNgModule } from '../../shared/style/prime-ng/prime-ng.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, CommonModule, PrimeNgModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {  
  get selectedIndex() : number {
    return +sessionStorage.getItem('selectedIndex')!;
  }

  set selectedIndex(index: number) {
    sessionStorage.setItem('selectedIndex', index.toString());
  }

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
  totalPoints(list: Results[]) {
    return list.reduce((previous, current) => previous + (current.relevance ?? 1), 0);
  }

  winnerOverall(): string {
    if(this.totalPoints(this.angularMaterialWins()) > this.totalPoints(this.primeNGWins())) {
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
    this.selectedIndex = $event.index.toString();
  }

  printResults() {
    window.print();
  }
}
