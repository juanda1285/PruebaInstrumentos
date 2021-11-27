import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentosComponent } from './vista/instrumentos/instrumentos.component';

const routes: Routes = [
  {path: '' ,   redirectTo:'instrumentos' , pathMatch: 'full'  },
  {path:'instrumentos' , component : InstrumentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
