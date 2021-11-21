import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    if(activar){
     value = '*'.repeat(value.length);
    } else {
      value = value;
    }

    return value;
  }

}
