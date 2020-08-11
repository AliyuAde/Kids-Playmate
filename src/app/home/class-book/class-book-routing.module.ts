import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassBookPage } from './class-book.page';

const routes: Routes = [
  {
    path: '',
    component: ClassBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassBookPageRoutingModule {}
