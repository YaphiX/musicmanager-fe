import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SonglistComponent } from '../view/songlist/songlist.component';
import { SongDetailComponent } from '../view/songlist/songdetail/songdetail.component';
import { ExportSongNlpComponent } from '../view/songlist/exportsongnlp/exportsongnlp.component';

import { PlaycountComponent } from '../view/playcount/playcount.component';

import { SingerlistComponent } from '../view/singerlist/singerlist.component';
import { SingerDetailComponent } from '../view/singerlist/singerdetail/singerdetail.component';
import { SimilarSingerComponent } from '../view/singerlist/similarsinger/similarsinger.component';
import { SingerSonglistComponent } from '../view/singerlist/singersonglist/singersonglist.component';
import { ExportSingerNlpComponent } from '../view/singerlist/exportsingernlp/exportsingernlp.component';

import { SelectlistComponent } from '../view/selectlist/selectlist.component';
import { SelecttagComponent } from '../view/selecttag/selecttag.component';
import { GuideComponent } from '../view/guide/guide.component';



const routes: Routes = [
	{ path: 'songlist',  component: SonglistComponent },
	{ path: 'playcount',  component: PlaycountComponent },
	{ path: 'singerlist',  component: SingerlistComponent },
	{ path: 'selectlist',  component: SelectlistComponent },
	{ path: 'selecttag',  component: SelecttagComponent },
	{ path: 'guide',  component: GuideComponent },
	{ path: 'songdetail/:id', component: SongDetailComponent },
	{ path: 'playcount/:id', component: SongDetailComponent },
	{ path: 'exportsongnlp', component: ExportSongNlpComponent},
	{ path: 'singerdetail/:id', component: SingerDetailComponent},
	{ path: 'similarsinger', component: SimilarSingerComponent},
	{ path: 'singersonglist', component: SingerSonglistComponent},
	{ path: 'exportsingernlp', component: ExportSingerNlpComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}