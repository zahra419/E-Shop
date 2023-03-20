import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthreducerPipe } from './pipes/lengthreducer.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { CartItemComponent } from './Cart/cart-item/cart-item.component';
import { EmptyComponent } from './Cart/empty/empty.component';
import { FrontComponent } from './Cart/front/front.component';



@NgModule({
  declarations: [
    LengthreducerPipe,
    NavbarComponent,
    CartItemComponent,
    EmptyComponent,
    FrontComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    LengthreducerPipe,
    FrontComponent,
    NavbarComponent
  ],
  entryComponents:[FrontComponent]
})
export class SharedModule { }
