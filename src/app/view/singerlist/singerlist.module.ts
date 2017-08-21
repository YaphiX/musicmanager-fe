import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from '../../router/app-routing.module';

import { MdInputModule, MdButtonModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, MdPaginatorModule, MdCheckboxModule, MdDialogModule, MdSelectModule, MdIconModule } from '@angular/material';
import { SingerlistComponent} from './singerlist.component';
import { SingerDetailComponent } from './singerdetail/singerdetail.component';
import { SimilarSingerComponent } from './similarsinger/similarsinger.component';
import { SingerSonglistComponent } from './singersonglist/singersonglist.component';
import { ExportSingerNlpComponent } from './exportsingernlp/exportsingernlp.component';

import { SharedModule } from '../../shared.module';

import 'hammerjs';

@NgModule({
  declarations: [
    SingerlistComponent,
    SingerDetailComponent,
    SimilarSingerComponent,
    SingerSonglistComponent,
    ExportSingerNlpComponent
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SingerlistModule { }
