import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: string, exponent: number = 1): string {

    //logical condition

    if (value == "John Doe") {
      return "It's me";
    }

    if (value.includes("Angular")) {
      return "It's my favorite programming language"
    }


    return exponent.toString();
  }

}
