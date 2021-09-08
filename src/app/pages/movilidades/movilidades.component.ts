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
  qr:string
  public commonUrl : string = 'http://localhost:8080/movilidad/generateQRCode/100/100/'
  constructor(private movilidadService: MovilidadService) { }

  ngOnInit(): void {
    
    this.cargarMovilidades();
    this.generarQr();
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

  generarQr():void{
    this.qr= this.commonUrl 
  }

}
