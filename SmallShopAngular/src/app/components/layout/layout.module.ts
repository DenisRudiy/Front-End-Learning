import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { HeaderModule } from '../header/header.module'
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
  declarations: [LayoutComponent],
  exports: [LayoutComponent, AppRoutingModule],
  imports: [CommonModule, HeaderModule, RouterModule]
})
export class LayoutModule {}
