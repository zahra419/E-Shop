import { Component, OnInit,Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
  animations:[trigger('slide',[
    transition(':enter',[
      style({transform:'translateX(100%)'}),
      animate('1s ease-in-out',style({
        transform:'translateX(0)'
      }))
    ])
  ])]
})
 
export class FrontComponent implements OnInit,OnDestroy {

  constructor(private cartservice:CartService) { }
  @Input() isOpen:boolean=true;
  items:Array<Cart>=[] as Array<Cart>
  subscription:Subscription |undefined
  total:any=0
  ngOnInit(): void {
    this.subscription=this.cartservice.getCart().subscribe(_data=>this.items=_data);
    this.total=this.cartservice.getTotal()
  }
 closesidebar(){
  this.isOpen=false;
 }
 ngOnDestroy(): void {
     if(this.subscription){
      this.subscription.unsubscribe();
     }
 }
}
