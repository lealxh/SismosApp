import { Component, OnInit } from '@angular/core';
import { SismosService } from '../services/sismos.service';
import { Sismo } from '../models/sismo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public sismosList: Sismo[] =[];

  RefGeografica: string;
  Magnitud: string;
  Latitud: string;
  Longitud: string;
  constructor(private service: SismosService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.service.getSismos().
    subscribe( response=>{
      this.sismosList=response;
      this.spinner.hide();
    },
    error=>{
      console.log(error);
      this.spinner.hide();
    }
    );
  }




}
