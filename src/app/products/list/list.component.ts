import { Component, OnInit, OnDestroy} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {
  products:Array<Product>=[]as Array<Product>
  page:number=1
  category:string |undefined;
  subscribtion:Subscription |undefined
  constructor(private productservice:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.getProducts() 
  }
  getProducts(){
    this.subscribtion=this.productservice.getProducts(this.category).subscribe((_data)=>this.products=_data, error=>this.router.navigateByUrl('error'));
    
  }
  onChangeCategory(category:string):void {
    this.category=category;
    this.getProducts()
  }

  ngOnDestroy():void{
    if(this.subscribtion){
       this.subscribtion.unsubscribe()
    }
  }

}
