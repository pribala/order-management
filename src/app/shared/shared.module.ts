import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: [MatTableModule,MatInputModule,MatToolbarModule, MatIconModule, MatCardModule, CapitalizePipe, FormsModule, MatProgressSpinnerModule]
})
export class SharedModule { }
