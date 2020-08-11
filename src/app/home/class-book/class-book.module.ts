import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassBookPageRoutingModule } from './class-book-routing.module';

import { ClassBookPage } from './class-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassBookPageRoutingModule
  ],
  declarations: [ClassBookPage]
})
export class ClassBookPageModule {}
