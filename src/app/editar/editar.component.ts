import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';



import { SismosService } from '../services/sismos.service';
import { Sismo } from '../models/sismo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor
  ( private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: SismosService,
    private spinner: NgxSpinnerService
    ) { }

  public sismosForm: FormGroup = this.fb.group({
      RefGeografica: [' ', [Validators.required,]],
      Magnitud: ['', [Validators.required]],
      Agencia: ['', Validators.required],
      Fecha: ['', [Validators.required]],//Validators.pattern('\\d\{4\}\-\[01\]\\d\-\[0\-3\]\\dT\[0\-2\]\\d\:\[0\-5\]\\d')]
      Latitud: ['', Validators.required],
      Longitud: ['', Validators.required],
      Profundidad: ['', Validators.required]
    });

  private edit: boolean;
  private sismo: Sismo;
  ngOnInit() {

    this.edit = false;
    this.route.params.subscribe(params => {
      const id: string = params['id'];

      if(id!='0')
      {
          this.spinner.show();
          this.edit = true;

          this.svc.getSismo(id).subscribe(
            res => {
              this.spinner.hide();
              this.sismo = res;
              this.parseData();

            },
            error => {
              this.spinner.hide();
              console.log(error);
            }
          );
      }

    });


  }

  parseData() {
    if (!this.sismo) {
      this.sismo = new Sismo();
    }
    this.sismosForm.controls['RefGeografica'].setValue(this.sismo.RefGeografica);
    this.sismosForm.controls['Magnitud'].setValue(this.sismo.Magnitud);
    this.sismosForm.controls['Agencia'].setValue(this.sismo.Agencia);
    this.sismosForm.controls['Fecha'].setValue(this.sismo.Fecha);
    this.sismosForm.controls['Latitud'].setValue(this.sismo.Latitud);
    this.sismosForm.controls['Longitud'].setValue(this.sismo.Longitud);
    this.sismosForm.controls['Profundidad'].setValue(this.sismo.Profundidad);
  }
  parseForm()
  {
    if (!this.sismo) {
      this.sismo = new Sismo();
    }
    this.sismo.RefGeografica = this.sismosForm.controls['RefGeografica'].value;
    this.sismo.Magnitud = this.sismosForm.controls['Magnitud'].value;
    this.sismo.Agencia = this.sismosForm.controls['Agencia'].value;
    this.sismo.Fecha = this.sismosForm.controls['Fecha'].value;
    this.sismo.Latitud = this.sismosForm.controls['Latitud'].value;
    this.sismo.Longitud = this.sismosForm.controls['Longitud'].value;
    this.sismo.Profundidad = this.sismosForm.controls['Profundidad'].value;

  }
  onSubmit() {
    this.sismosForm.updateValueAndValidity();
    if (!this.sismosForm.valid) {
      return;
    }

    this.parseForm();
    this.spinner.show();
    if (this.edit) {

        this.svc.editarSismo(this.sismo).subscribe(
          res => {
            this.spinner.hide();
            this.router.navigateByUrl('/buscar');

          },
          error =>{
            console.warn(error);
            this.spinner.hide();
         });
      } else {

        this.svc.registrarSismo(this.sismo).subscribe(
          res => {
            this.spinner.hide();
            this.router.navigateByUrl('/buscar');
          },
          error =>{
            console.warn(error);
            this.spinner.hide();
          }
        );
      }

  }

  get RefGeografica() {
    return this.sismosForm.get('RefGeografica');
  }

  get Magnitud() {
    return this.sismosForm.get('Magnitud');
  }

  get Agencia() {
    return this.sismosForm.get('Agencia');
  }

  get Fecha() {
    return this.sismosForm.get('Fecha');
  }

  get Latitud() {
    return this.sismosForm.get('Latitud');
  }

  get Longitud() {
    return this.sismosForm.get('Longitud');
  }

  get Profundidad() {
    return this.sismosForm.get('Profundidad');
  }

}
