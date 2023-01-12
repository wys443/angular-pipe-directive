import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class PipePipe implements PipeTransform {

  transform(value: number, param1: number, param2: number, param3: number = 1): number {
  //pass optional value
   return( value + param1 + param2 ) * param3; //data type
  }
}
