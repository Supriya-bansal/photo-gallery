import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SettingsComponent } from './components/settings/settings.component';
import { MatMenuModule } from '@angular/material/menu';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatCardModule,
  CommonModule,
  MatMenuModule,
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [...modules],
  exports: [...modules, SettingsComponent],
})
export class SharedModule {}
