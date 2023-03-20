import {map} from 'rxjs';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Cart } from '../interfaces/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }
  private _data=new BehaviorSubject<Array<Cart>>([])
  public data=this._data.asObservable()
  addToCart(data:Cart):void{
    let cartitems=this.checkLocalStorage()
      let index=cartitems.findIndex(val=>val.productId==data.productId)
      if(index!=-1){
        cartitems[index].quantity+=1
      }else{
      cartitems.unshift(data) 
    }
    localStorage.setItem('myCart',JSON.stringify(cartitems))
    this._data.next(cartitems)
  }
  //update quantity of item in cart 
  updateQuantityOfItem(item:Cart,num:number){
    let cartItems=this.checkLocalStorage()
    if(!(item.quantity==1 && num<0) ){
      item.quantity+=num;
       cartItems[cartItems.findIndex(el => el.productId === item.productId)] = item;
       localStorage.setItem('myCart',JSON.stringify(cartItems))
       this._data.next(cartItems)
    }
    
  }
  //remove item from cart 
  removeFromCart(data:Cart){
    let cartItems=this.checkLocalStorage()
    if(cartItems.length>0){
      let updated=cartItems.filter((val:Cart)=>val.productId!=data.productId)
      localStorage.setItem('myCart',JSON.stringify(updated))
      this._data.next(updated)
    }
  }
  //clear all items from cart
  clearCart(){
    localStorage.clear()
    this._data.next([])
  }
  //get all items of cart
  getCart(){
   this._data.next(this.checkLocalStorage())
   return this.data;
  
  }
  //total price for all items in cart
  getTotal():any{
    this._data.next(this.checkLocalStorage())
    let total$=this.data.pipe(
      map(order => order.reduce((total, order) => total + (order.quantity*order.price), 0)));
    return total$
  }
  //number of items in cart
  getNumberOfItems():any{
    this._data.next(this.checkLocalStorage())
    let total$=this.data.pipe(
      map(order => order.reduce((total, order) => total + (order.quantity), 0)));
    return total$
  }
  checkLocalStorage():Array<Cart>{
    let listItems=[]
    let storage=localStorage.getItem('myCart')
    if(storage!=null){
      listItems=JSON.parse(storage)
    }
    return listItems;
  }

}
