import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdTableModule, MdPaginatorModule, MdDialogModule, MdSelectModule } from '@angular/material';
import { SelectlistComponent, ActionDialog } from './selectlist.component';

import { SharedModule } from '../../shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    SelectlistComponent,
    ActionDialog
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    MdInputModule,
    MdButtonModule,
    MdTableModule,
    MdPaginatorModule,
    MdDialogModule,
    MdSelectModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ActionDialog]
})
export class SelectlistModule { }
