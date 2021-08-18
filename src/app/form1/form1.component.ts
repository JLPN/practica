import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

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
      validators: [this.MustMatch("password","repitaPassword")]
    },
    );


}

MustMatch(targetKey: string, toMatchKey: string): ValidatorFn{
  return (group: FormGroup): {[key: string]: any} => {
    const target = group.controls[targetKey];
    const toMatch = group.controls[toMatchKey];
    if (target.touched && toMatch.touched) {
      const isMatch = target.value === toMatch.value;
      if (!isMatch && target.valid && toMatch.valid) {
        toMatch.setErrors({equalValue: targetKey});
        const message = targetKey + ' != ' + toMatchKey;
        return {'equalValue': message};
      }
      if (isMatch && toMatch.hasError('equalValue')) {
        toMatch.setErrors(null);
      }
    }

    return null;
  };
}

// MustMatch(controlName: string, matchingControlName: string) {
//   return ( formGroup : FormGroup) =>  {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];
//     if (matchingControl.errors && !matchingControl.errors.mustMach ){
//       return;
//     }
//     if (control.value != matchingControl.value)
//     {
//       matchingControl.setErrors({mustMatch: true})
//     }
//     else {
//       matchingControl.setErrors(null)
//     }

//   }
//   }

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
