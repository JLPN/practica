import { DataServices } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component implements OnInit {
  regiones: any;
  constructor(private regionesService: DataServices) { }

  ngOnInit(): void {

    this.regionesService.getRegiones().subscribe(
      (res: any) => {
        this.regiones = res;
        console.log(res);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
