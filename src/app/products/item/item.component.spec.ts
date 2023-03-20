import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { LengthreducerPipe } from 'src/app/shared/pipes/lengthreducer.pipe';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let pipeSpy:jasmine.Spy;
  let fixture: ComponentFixture<ItemComponent>;
  let inputValue={id:1, title:'a very long descriptif title needs to be reduced',image:'image',price:1,description:'description',category:'category'}
  beforeEach(async () => {
   pipeSpy = spyOn(LengthreducerPipe.prototype, 'transform');
    TestBed.configureTestingModule({
      declarations: [ ItemComponent,LengthreducerPipe ],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ItemComponent ],
      }
    });

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.item=inputValue
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check pipe is called',()=>{
    expect(pipeSpy).toHaveBeenCalled()
  })
  it('should render the passed @input value',()=>{
    fixture.detectChanges()
    const compiled=fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#price').textContent).toEqual('$1.00');
    expect(compiled.querySelector('img').src).toEqual('http://localhost:9876/image');  
  })
  
 
});
