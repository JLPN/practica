import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {
  formulario: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        nombre: ["",Validators.required],
        email: ["",[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ["",[Validators.required, Validators.minLength(5)]],
        repitaPassword: ["",[Validators.required,Validators.minLength(5)]]
      },
      {
        validator: this.MustMatch("password","repitaPassword")
      }
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }
      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }


  // para simplificar acceso a los campos
  get form() {
    return this.formulario.controls;
  }

  onSubmit() {
    this.submitted = true;
    // si el formulario es invalid
    if (this.formulario.invalid) {
      return false;
    }
    // si el formulario es válido mostrsmos los datos
    alert(
      "Datos Enviados! \n\n" + JSON.stringify(this.formulario.value, null, 4)
    );
  }

  onReset() {
    this.submitted = false;
    this.formulario.reset();
  }

}
