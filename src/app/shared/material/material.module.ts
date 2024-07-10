import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialModuleArr = [
      MatCardModule,
      MatButtonModule,
      MatInputModule,
      MatListModule,
      MatDividerModule,
      MatSnackBarModule,
      MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MaterialModuleArr
  ],
  exports : [
    ...MaterialModuleArr
  ]
})
export class MaterialModule { }
