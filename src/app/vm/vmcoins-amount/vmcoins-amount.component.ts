import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NominalService } from 'src/app/services/nominal.service';
import { Nominal } from '../vm.model';

@Component({
  selector: 'app-vmcoins-amount',
  templateUrl: './vmcoins-amount.component.html',
  styleUrls: ['./vmcoins-amount.component.css']
})
export class VMCoinsAmountComponent {
  @Output() sendAmount = new EventEmitter<number>();
  nominals: Nominal[] = [];
  @Input() amount: number = 0;

  constructor(private nominalSrvc: NominalService) {
  }

  ngOnInit() {
    this.nominalSrvc.listNominals().subscribe(nominals => {
      this.nominals = nominals;
      this.nominalSrvc.nominals = nominals;
    })
  }

  addAmount(nom: number) {
    if (nom === 0) {
      const ans = confirm("Are you sure you want to WITHDRAW your money?");
      if (ans) {
        this.amount = 0;
        this.sendAmount.next(this.amount);
      }
    } else {
      this.amount += nom;
      this.sendAmount.next(this.amount);
    }
  }

}
