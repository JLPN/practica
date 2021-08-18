import { DatosService } from './../datos.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {

  public minRenta: number = 400000;
  maxRenta: number = 2000000;
  renta: number = 0;
  stepRenta: number = 50000;

  @ViewChild('rentaInput') rentaParam: ElementRef;

  constructor(private router: Router, private datosService: DatosService) { }

  ngOnInit(): void {
    alert('En es storage había un valor de:' + localStorage.getItem("nombreCompleto"));
    this.datosService.enviarMensaje(localStorage.getItem("nombreCompleto"));
    localStorage.clear();
  }

  mostrar()
  {
    alert('Ha enviado una renta de :$ ' + this.rentaParam.nativeElement.value);
    this.datosService.enviarMensaje(this.rentaParam.nativeElement.value);
    this.router.navigate(['/reactivo']);
  }

}
