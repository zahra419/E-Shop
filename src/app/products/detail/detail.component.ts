import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  productDetail:Product={} as Product
  id!:number;
  constructor(private activeRoute:ActivatedRoute,private productservice:ProductsService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.productservice.getSingleProduct(this.id).subscribe(res=>this.productDetail=res)
  }
  addToCart():void{
    this.cartservice.addToCart({
      productId: this.productDetail.id,
      title: this.productDetail.title,
      image: this.productDetail.image,
      quantity: 1,
      price: this.productDetail.price
    })
  }
}
