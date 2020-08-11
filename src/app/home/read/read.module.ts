import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ReadPageRoutingModule } from './read-routing.module';

import { ReadPage } from './read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadPageRoutingModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [ReadPage]
})
export class ReadPageModule {}
