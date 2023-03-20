import { Component, OnInit,Input } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item:Cart={}as Cart;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
  }
  remove():void{
    this.cartservice.removeFromCart(this.item)
  }
  updateQuantity(num:number):void{
    this.cartservice.updateQuantityOfItem(this.item,num)
  }
}
