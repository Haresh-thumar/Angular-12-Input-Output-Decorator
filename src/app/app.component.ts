import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'input-output-decorator';
  constructor(){}

  cartBucket: product [] = [];

  data:product [] = [
    {name:'Pen', qty: 1, price: 10},
    {name:'Mobile', qty: 1, price: 11000},
    {name:'Laptop', qty: 1, price: 85000},
  ];

  update(payload:any){
    if(payload.addToCart){
      this.cartBucket.push(payload.product);
    }else {
      this.cartBucket = this.cartBucket.filter(item => item != payload.product);
    }
  }

  calcPrice(){
    let total = 0;
    this.cartBucket.forEach(item => {
      total = total + item.qty * item.price
    });
    return total;
  }

}


export class product {
  name:string;
  qty:number;
  price:number;
}
