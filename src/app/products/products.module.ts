import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    ItemComponent,
    ListComponent,
    DetailComponent,
    SidebarComponent,
    
  ],
  imports: [
    RouterModule.forChild([
      {path:'',component:ListComponent},
      {path:'product/detail/:id',component:DetailComponent}
    ]),
    CommonModule,
    NgxPaginationModule,
    SharedModule,
    
    
    
    
  ]
})
export class ProductsModule { }
