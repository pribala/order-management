import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  exports: [MatTableModule,MatInputModule,MatToolbarModule, MatIconModule, MatCardModule, CapitalizePipe]
})
export class SharedModule { }
