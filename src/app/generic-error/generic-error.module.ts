import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericErrorComponent } from './generic-error.component';
import { GenericErrorRoutingModule } from './generic-error-routing.module';
@NgModule({
  declarations: [GenericErrorComponent],
  imports: [
    CommonModule,
    GenericErrorRoutingModule
  ],
  exports: [GenericErrorComponent]
})
export class GenericErrorModule { }
