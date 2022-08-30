import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsGridComponent } from './skills-grid/skills-grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SkillsGridComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    SkillsGridComponent,
    FlexLayoutModule,
  ]
  
})
export class ComponentsModule { }
