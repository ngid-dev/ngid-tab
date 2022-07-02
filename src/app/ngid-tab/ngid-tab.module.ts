import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgidTabItemComponent } from './ngid-tab-item.component';
import { NgidTabComponent } from './ngid-tab.component';
@NgModule({
  imports: [CommonModule],
  declarations: [NgidTabComponent, NgidTabItemComponent],
  exports: [NgidTabComponent, NgidTabItemComponent],
})
export class NgidTabModule {}
