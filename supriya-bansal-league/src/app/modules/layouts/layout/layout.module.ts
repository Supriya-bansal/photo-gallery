import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { MatCardModule } from '@angular/material/card';

import { LayoutRoutingModule } from './layout-routing.module';
import { PhotoPreviewComponent } from 'src/app/components/photo-preview/photo-preview.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from 'src/app/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ValidationMessageComponent } from 'src/app/components/validation-message/validation-message.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { ItalicizePipe } from 'src/app/pipes/italicize.pipe';

@NgModule({
  declarations: [
    AlbumComponent,
    PhotoPreviewComponent,
    SearchComponent,
    ValidationMessageComponent,
    ItalicizePipe,
  ],
  imports: [
    MatCardModule,
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
})
export class LayoutModule {}
