import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdTableModule, MdPaginatorModule, MdDialogModule } from '@angular/material';
import { GuideComponent, ActionDialog } from './guide.component';

import { SharedModule } from '../../shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    GuideComponent,
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
    MdDialogModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ActionDialog]
})
export class GuideModule { }
