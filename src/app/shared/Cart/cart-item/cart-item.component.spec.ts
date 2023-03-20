
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LengthreducerPipe } from '../../pipes/lengthreducer.pipe';




import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let inputValue={productId:1,title:'it s very long title should be reduced',image:'image',price:1,quantity:1}
  let pipeSpy:jasmine.Spy;
  beforeEach(async () => {
    pipeSpy = spyOn(LengthreducerPipe.prototype, 'transform');
    await TestBed.configureTestingModule({
      declarations: [ CartItemComponent,LengthreducerPipe ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should pipe be called',()=>{
    expect(pipeSpy).toHaveBeenCalled()
  })
});
