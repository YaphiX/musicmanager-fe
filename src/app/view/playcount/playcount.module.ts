import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, MdPaginatorModule, MdCheckboxModule, MdDialogModule, MdSelectModule, MdIconModule } from '@angular/material';
import { PlaycountComponent } from './playcount.component';

import { SharedModule } from '../../shared.module';
import 'hammerjs';

@NgModule({
  declarations: [
    PlaycountComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdPaginatorModule,
    MdCheckboxModule,
    MdDialogModule,
    MdSelectModule,
    MdIconModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PlayCountModel { }
