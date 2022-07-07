import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../app.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input('pdata') productData: product;
  @Output() updateCartEvt = new EventEmitter<any>();

  disable: boolean = false;
  btnBg:boolean = false;
  isAddedToCart:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.productData.qty == 1) {
      this.disable = true;
      this.btnBg = true;
    }
  }

  decQty() {
    if (this.productData.qty > 1) {
      this.productData.qty--;
      if(this.productData.qty == 1){
        this.disable = true;
        this.btnBg = true;
      }
    }
  }

  incQty() {
    this.productData.qty++;
    if (this.productData.qty != 0 && this.productData.qty >= 0) {
      this.disable = false;
      this.btnBg = false;
    }
  }

  updateCart(){
    this.isAddedToCart = !this.isAddedToCart;
    let payLoad = {
      addToCart: this.isAddedToCart,
      product: this.productData
    }
    this.updateCartEvt.emit(payLoad);
  }


}
