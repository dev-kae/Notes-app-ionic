import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'editor-de-nota',
    loadChildren: () => import('./page/editor-de-nota/editor-de-nota.module').then( m => m.EditorDeNotaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
