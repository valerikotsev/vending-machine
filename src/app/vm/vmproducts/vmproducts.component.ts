import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Product } from '../vm.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-vmproducts',
  templateUrl: './vmproducts.component.html',
  styleUrls: ['./vmproducts.component.css']
})
export class VMProductsComponent {
  @Output() sendPrice = new EventEmitter<number>();
  products: Product[] = [];
  ei = -1; // index of the product currently edited
  @Input() amount!: number;
  @ViewChild('inpName') inpName: ElementRef | undefined;

  constructor(private productSrvc: ProductService) {
  }

  ngOnInit() {
    this.productSrvc.listProducts().subscribe(products => {
      this.products = products;
    })
  }

  isOdd(i: number): boolean {
    return (i & 1) === 1;
  }

  editProd(ind: number) {
    this.ei = ind;
    setTimeout(() => this.inpName?.nativeElement.focus(), 100);
  }

  onBL() {
    this.ei = -1;
  }

  onKP(event: KeyboardEvent) {
    const inp: string = event.key;
    if (inp === 'Enter') this.ei = -1;
    if (!/[a-zA-Z0-9 -]/.test(inp)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  delProd(ind: number) {
    const ans = confirm("Are you sure you want to DELETE this product " + this.products[ind].name + "?");
    if (ans) this.products.splice(ind, 1);
  }

  buyProd(ind: number) {
    const ans = confirm("Are you sure you want to BUY this product " + this.products[ind].name + "?");
    if (ans) this.sendPrice.next(this.products[ind].price);
  }
}
