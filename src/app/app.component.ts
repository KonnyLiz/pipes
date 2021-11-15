import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Zoro Ronronoa';

  arreglo: number[] = [1,2,3,4,5,6,7,8,9];

  PI: number = Math.PI;

  porcentaje: number = 0.876;

  salario: number = 2365.09;

  heroe = {
    nombre: 'Zoro',
    clave: 'Cazador de Piratas',
    edad: 24,
    direccion: {
      calle: 'Se Perdio',
      casa: 9
    }
  }

  // para usar el pipe 
  promesa = new Promise<string>((resolve) => {
    setTimeout(()=> {
      resolve('llgo el dato');
    }, 4500);
  });

  fecha: Date = new Date();

  idioma: string = 'es';

  raro: string = 'konnY aMayA BarreRA';
}
