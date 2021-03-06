import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import {  RouterModule } from '@angular/router';

import { MenuComponent } from './menu.component';

import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class MenuModule { }