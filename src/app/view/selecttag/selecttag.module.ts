import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdDialogModule } from '@angular/material';
import { SelecttagComponent } from './selecttag.component';

import { SharedModule } from '../../shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    SelecttagComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SelecttagModule { }
