import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item:Product={} as Product;
  constructor() { }
  
  ngOnInit(): void {
  }

}
