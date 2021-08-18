import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component implements OnInit {

  formulario: FormGroup;
  botonActivo: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group (

    {

      nombre: ["",Validators.required],

      email: ["",[Validators.required,Validators.email]],

      password: ["",[Validators.required,Validators.minLength(5)]],

      repitaPassword: ["",[Validators.required,Validators.minLength(5)]]

    },

    {

      Validators: this.MustMatch("password","repitaPassword")

    }

    );



}



MustMatch(controlName: string, matchingControlName: string) {

  return ( formGroup : FormGroup) =>  {

    const control = formGroup.controls[controlName];

    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMach ){

      return;

    }

    if (control.value != matchingControl.value)

    {

      matchingControl.setErrors({mustMatch: true})

    }

    else {

      matchingControl.setErrors(null)

    }



  }

  }



  onSubmit(){

    this.botonActivo = true;

    if(this.formulario.invalid)

    {

      return false;

    }

    else {

      alert(

        "Datos Invalidos! \n \n" +JSON.stringify(this.formulario.value, null, 4)

      );

      return true;

    }



  }



  get form(){

    return this.formulario.controls;

  }



  onReset(){

    this.botonActivo = false;

    this.formulario.reset();

  }



}

