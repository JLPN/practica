import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

class Formulario {
  nombre: string;
  email: string;
  password: string;
  repitaPassword: string;
}

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {
  formulario: Formulario = {
    nombre: '',
    email: '',
    password: '',
    repitaPassword: ''
  }
  nombreParametro: string = "";
  apellidoQuery: string = "";
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombreParametro = this.rutaActiva.snapshot.queryParams.nombre;
    this.apellidoQuery = this.rutaActiva.snapshot.queryParams.apellido;

    this.formulario.nombre = this.nombreParametro + ' ' + this.apellidoQuery;
    localStorage.setItem("nombreCompleto",this.formulario.nombre);
  }

  submit(){
    alert(this.formulario.nombre);
  }

}
