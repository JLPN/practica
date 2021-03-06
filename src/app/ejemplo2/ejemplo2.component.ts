import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  constructor(private formularioService: FormularioService) { }

  ngOnInit(): void {
    console.log(this.formularioService.traerDatos());
  }

}
