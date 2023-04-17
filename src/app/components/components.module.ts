import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileContentComponent } from './tile-content/tile-content.component';
import { ImageComponent } from './image/image.component';

const CUSTOM_COMPONENTS = [
  TileContentComponent,
  ImageComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CUSTOM_COMPONENTS
  ],
  exports: [
    CUSTOM_COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
