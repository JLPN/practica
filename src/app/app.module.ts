import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './data.service';
import { FormularioService } from './formulario.service';
import { DatosService } from './datos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo4Component } from './ejemplo4/ejemplo4.component';
import { Form1Component } from './form1/form1.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    Ejemplo2Component,
    PlantillaComponent,
    ReactivoComponent,
    Ejemplo3Component,
    Ejemplo4Component,
    Form1Component,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SidebarModule.forRoot()
  ],
  providers: [DatosService,FormularioService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
