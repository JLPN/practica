import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PlantillaComponent } from './plantilla/plantilla.component';

const routes: Routes = [
  {path: 'reactivo', component: ReactivoComponent},
  {path: 'ejemplo', component: EjemploComponent},
  {path: 'plantilla', component: PlantillaComponent},

  { path: '**', pathMatch: 'full', redirectTo: 'ejemplo' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
