import { Component, ViewChild } from '@angular/core';
import { VMResultsComponent } from '../vmresults/vmresults.component';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.css']
})
export class VendingMachineComponent {
  @ViewChild('vmResults') vmResults: VMResultsComponent | undefined;
  amount: number = 0;
  
  getAmount(amount: number) {
    if (amount === 0) { // withdraw request received, amount set back to 0
      this.vmResults?.processResults(0, this.amount);
    } else if (this.amount === 0) { // new client arrived, clear results component
      this.vmResults?.processResults(-100, 0);
    }
    this.amount = amount;
  }

  getPrice(price: number) {
    if (price > this.rnd2d(this.amount)) { // client has not inserted enough money
      this.vmResults?.processResults(-10, 0);
    } else { // successful purchase
      this.vmResults?.processResults(price, this.rnd2d(this.amount - price));
      this.amount = 0;
    }
  }

  private rnd2d(value: number) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

}
