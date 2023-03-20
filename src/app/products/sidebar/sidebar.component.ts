import { Component, EventEmitter, OnInit, Output,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,OnDestroy {
  categories:Array<string>=[]
  @Output() itemEmitter=new EventEmitter<string>();
  subscription?:Subscription
  constructor(private productsservice:ProductsService) { }

  ngOnInit(): void {
    this.subscription=this.productsservice.getCategories().subscribe(_data=>this.categories=_data)
  }
 changeCategory(category:string){
  
    this.itemEmitter.emit(category)
 }
 ngOnDestroy(): void {
     if(this.subscription){
      this.subscription.unsubscribe()
     }
 }
}
