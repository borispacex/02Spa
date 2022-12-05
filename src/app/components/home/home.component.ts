import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre: string = 'Juan';
  fecha: Date = new Date();

  edad: number = 20;
  ciudades: string[] = ['La Paz', 'Tarija', 'Cochabamba', 'Potosi'];

  empleados: Empleado[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 20 },
    { id: 2, nombre: 'Roberto', apellido: 'Fernadez', edad: 30 },
    { id: 3, nombre: 'Carlos', apellido: 'Lopez', edad: 40 },
    { id: 4, nombre: 'Gabriela', apellido: 'Arcani', edad: 15 },
  ];

  heroes: Heroe[] = [];

  constructor(private _serviceHeroes: HeroesService) {

  }
  ngOnInit(): void {
    this.heroes = this._serviceHeroes.getHeroes();
    console.log('datos del servicio', this.heroes);
  }

}
