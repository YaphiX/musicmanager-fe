import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, MdPaginatorModule, MdCheckboxModule, MdDialogModule, MdSelectModule, MdIconModule } from '@angular/material';
import { SonglistComponent} from './songlist.component';
import { SongDetailComponent, ActionDialog } from './songdetail/songdetail.component';
import { ExportSongNlpComponent } from './exportsongnlp/exportsongnlp.component';

import { SharedModule } from '../../shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    SonglistComponent,
    ActionDialog,
    SongDetailComponent,
    ExportSongNlpComponent
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
    MdDatepickerModule,
    MdNativeDateModule,
    MdTableModule,
    MdPaginatorModule,
    MdCheckboxModule,
    MdDialogModule,
    MdSelectModule,
    MdIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [ActionDialog]
})
export class SonglistModule { }
