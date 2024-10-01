import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VendingMachineComponent } from './vm/vending-machine/vending-machine.component';
import { VMProductsComponent } from './vm/vmproducts/vmproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VMCoinsAmountComponent } from './vm/vmcoins-amount/vmcoins-amount.component';
import { VMResultsComponent } from './vm/vmresults/vmresults.component';

@NgModule({
  declarations: [
    AppComponent,
    VendingMachineComponent,
    VMProductsComponent,
    VMCoinsAmountComponent,
    VMResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
