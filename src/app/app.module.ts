import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './router/app-routing.module';
import { SonglistModule } from './view/songlist/songlist.module';
import { PlayCountModel } from './view/playcount/playcount.module';
import { SingerlistModule } from './view/singerlist/singerlist.module';
import { SelectlistModule } from './view/selectlist/selectlist.module';
import { GuideModule } from './view/guide/guide.module';
import { SelecttagModule } from './view/selecttag/selecttag.module';

import { MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NgheaderComponent } from './component/header/header.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { SelectlistComponent } from './view/selectlist/selectlist.component';
import { SelecttagComponent } from './view/selecttag/selecttag.component';
import { GuideComponent } from './view/guide/guide.component';

import {MdIconModule} from '@angular/material';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    NgheaderComponent,
    SidenavComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdIconModule,
    MdToolbarModule,
    SonglistModule,
    PlayCountModel,
    SingerlistModule,
    SelectlistModule,
    GuideModule,
    SelecttagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
