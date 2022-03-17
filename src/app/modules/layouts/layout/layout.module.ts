import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumComponent } from 'src/app/components/album/album.component';
import { MatCardModule } from '@angular/material/card';

import { LayoutRoutingModule } from './layout-routing.module';
import { PhotoPreviewComponent } from 'src/app/components/photo-preview/photo-preview.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from 'src/app/components/search/search.component';
import { ValidationMessageComponent } from 'src/app/components/validation-message/validation-message.component';

import { ItalicizePipe } from 'src/app/pipes/italicize.pipe';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AlbumComponent,
    PhotoPreviewComponent,
    SearchComponent,
    ValidationMessageComponent,
    ItalicizePipe,
  ],
  imports: [LayoutRoutingModule, SharedModule],
})
export class LayoutModule {}
