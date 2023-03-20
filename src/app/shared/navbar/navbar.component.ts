import { Component, OnInit, ViewChild,ViewContainerRef,ComponentFactoryResolver} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FrontComponent } from '../Cart/front/front.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('cart',{read: ViewContainerRef}) 
   cartContainer!:ViewContainerRef
  open:boolean=false
  totalItems:any
  constructor(private cartservice:CartService,private resolver:ComponentFactoryResolver ) { }
  ngOnInit(): void {
    this.totalItems=this.cartservice.getNumberOfItems()
  }
  openCart(){
    let cartFactory=this.resolver.resolveComponentFactory(FrontComponent)
    let cartComponent=this.cartContainer.createComponent(FrontComponent)
    cartComponent.instance.isOpen=true
  }
}
