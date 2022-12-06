import { Heroe, HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit  {
  private id!: number;
  heroe!: Heroe;

  constructor(
    private _serviceHeroes: HeroesService,
    private activateRoute: ActivatedRoute
    ) {

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      // console.log(params);
      this.id = params['id'];
      this.heroe = this._serviceHeroes.getHeroe(this.id);
      console.log(this.heroe);
    })
  }

}
