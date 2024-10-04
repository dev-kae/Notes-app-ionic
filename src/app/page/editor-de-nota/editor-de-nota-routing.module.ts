import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorDeNotaPage } from './editor-de-nota.page';

const routes: Routes = [
  {
    path: '',
    component: EditorDeNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorDeNotaPageRoutingModule {}
