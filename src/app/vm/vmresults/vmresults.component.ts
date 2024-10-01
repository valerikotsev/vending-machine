import { Component } from '@angular/core';
import { Nominal } from '../vm.model';
import { NominalService } from 'src/app/services/nominal.service';

@Component({
  selector: 'app-vmresults',
  templateUrl: './vmresults.component.html',
  styleUrls: ['./vmresults.component.css']
})
export class VMResultsComponent {
  nominals!: Nominal[];
  spent: number = -100;
  remainder: number = 0;
  coins: number[] = [];

  constructor(private nominalSrvc: NominalService) { }

  processResults(spent: number, remainder: number) {
    if (!this.nominals) this.nominals = this.nominalSrvc.nominals;
    this.spent = spent;
    this.remainder = remainder;
    this.coins = remainder > 0 ? this.calcCoins(remainder) : [];
  }

  private rnd2d(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  private calcCoins(remainder: number): number[] {
    let amount: number = remainder;
    let div: number; 
    const res: number[] = Array(this.nominals.length).fill(0);
    this.nominals.forEach((nom, i) => {
      div = Math.floor(amount / nom.value);
      if (div > 0) {
        res[i] = div;
        amount = this.rnd2d(amount - nom.value * div);
      }
    })
    return res;
  }

}
