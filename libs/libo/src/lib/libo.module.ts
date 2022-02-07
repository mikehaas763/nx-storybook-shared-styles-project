import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinCompComponent } from './min-comp/min-comp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MinCompComponent
  ],
  exports: [
    MinCompComponent
  ]
})
export class LiboModule {}
