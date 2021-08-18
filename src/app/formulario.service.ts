import { Injectable } from '@angular/core';
import { DatosService } from './datos.service';
import { Formulario } from './formulario.model';

@Injectable()
export class FormularioService {
  formulario: Formulario = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "juan"
  }
  constructor(private datosService: DatosService)
  {  }
  traerDatos(){
    this.datosService.enviarMensaje(JSON.stringify(this.formulario));
    return this.formulario;
  }
}
