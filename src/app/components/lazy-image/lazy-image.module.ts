import {NgModule} from '@angular/core';
import {LazyImageComponent} from './lazy-image.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    LazyImageComponent
  ],
  bootstrap: []
})

export class LazyImageModule { }
