import { Component, OnInit } from '@angular/core';
import { Movilidades } from '../../models/movilidades';
import { MovilidadService } from '../../services/movilidad.service';

@Component({
  selector: 'app-movilidades',
  templateUrl: './movilidades.component.html',
  styleUrls: ['./movilidades.component.css']
})
export class MovilidadesComponent implements OnInit {

  movilidades: Movilidades[]=[];
  constructor(private movilidadService: MovilidadService) { }

  ngOnInit(): void {
    this.cargarMovilidades();
  }

  cargarMovilidades():void{
    this.movilidadService.lista().subscribe(
      data=>{
        this.movilidades=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
