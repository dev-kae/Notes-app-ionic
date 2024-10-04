import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorDeNotaPageRoutingModule } from './editor-de-nota-routing.module';

import { EditorDeNotaPage } from './editor-de-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorDeNotaPageRoutingModule
  ],
  declarations: [EditorDeNotaPage]
})
export class EditorDeNotaPageModule {}
