import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!: Heroe; // {id: nomnre, }
  @Input() index!: number; // i

  @Output() heroeSeleccionado: EventEmitter<number>;  // HIJO

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit() {

  }

  verHeroe() {
    console.log('Enviando index a componente PADRE : ' + this.index);
    this.heroeSeleccionado.emit(100);
    // this.router.navigate(['/heroe', this.index]);
  }

}
