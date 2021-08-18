import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServices {
  urlRegiones ='https://apis.digital.gob.cl/dpa/regiones';

  //' https://api.adderou.cl/tyaas/';
  constructor(private httpClient: HttpClient){}

  getRegiones(){
    return this.httpClient.get(this.urlRegiones);
}

}
