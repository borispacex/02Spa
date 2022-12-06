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

  constructor(
    private _serviceHeroes: HeroesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.heroes = this._serviceHeroes.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
