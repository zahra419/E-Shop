import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengthreducer'
})
export class LengthreducerPipe implements PipeTransform {

  transform(value: String): String {
    if(value.length>40){
       return value.substring(0,40)+"...";
    }
    return value;
  }

}
