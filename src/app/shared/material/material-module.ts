import { NgModule } from '@angular/core';
import { MatChipInput, MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatIconModule,
    MatChipsModule,
    MatChipInput,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatPaginator,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    MatChipInput,
    MatDatepickerModule,
    MatNativeDateModule

  ]
})
export class MaterialModule {}
