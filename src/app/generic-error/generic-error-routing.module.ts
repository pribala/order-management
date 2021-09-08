import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericErrorComponent } from './generic-error.component';
const routes: Routes = [
  {path: '**', component: GenericErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericErrorRoutingModule { }
