import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  edad: number = 15;
  numeros: number[] = [1, 2, 3, 4, 5];
  variable: string = 'A';

  misClases() {
    let clases = {
      verde: this.edad > 18,
      fondoRojo: true 
    }
    return clases;
  }
  misEstilos() {
    let estilos = {
      'backgroundColor': this.edad > 18 ? 'pink' : 'blue',
      'padding': '30px',
      'margin-top': '50px',
      'color': 'white'
    }
    return estilos;
  } 

  nombre: string = '';
  cambiarMayusculas() {
    this.nombre = this.nombre.toUpperCase();
  }
}
