import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  // array de heroes
  heroes: Heroe[] = [];

  constructor(private _serviceHeroes: HeroesService) { }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
    console.log(this.heroes);
  }

  // sera llamado desde el componente HIJO heroe-tarjeta
  verHeroe(idx: number) {
    console.log('Recibiendo de componente HIJO : ' + idx);
    // this.router.navigate(['/heroe', idx]);
  }
}
