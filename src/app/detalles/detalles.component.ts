import { Component, OnInit } from '@angular/core';
import { SismosService } from '../services/sismos.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  public sismo:any={};
  constructor(private svc: SismosService, private route: ActivatedRoute,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      const id: string = params['id'];
      this.spinner.show();
      this.svc.getSismo(id).subscribe(
        res => {
          this.sismo = res;
          this.spinner.hide();
        },
        error => {

          console.log(error);
          this.spinner.hide();
        }
      );
    });
  }

  onSubmit()
  {

  }

}
