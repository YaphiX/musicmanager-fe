import { Component } from '@angular/core';

@Component({
	selector: 'breadNav',
	templateUrl: './bread.component.html',
	styleUrls: ['./bread.component.css']
})

export class BreadNavComponent {
	sub1 = ''
	sub2 = ''
	routerLink = ''
	ngOnInit() {
		let url = window.location.href
		if(url.indexOf('songdetail') != -1) {
			this.routerLink = '../../songlist'
			this.sub1 = '歌曲列表'
			this.sub2 = '歌曲详情'
		} else if(url.indexOf('exportsongnlp') != -1) {
			this.routerLink = '../songlist'
			this.sub1 = '歌曲列表'
			this.sub2 = '导入歌曲nlp'
		} else if(url.indexOf('playcount') != -1) {
			this.routerLink = '../../playcount'
			this.sub1 = '播放次数'
			this.sub2 = '歌曲详情'
		} else if(url.indexOf('singerdetail') != -1) {
			this.routerLink = '../../singerlist'
			this.sub1 = '歌手列表'
			this.sub2 = '歌手详情'
		} else if(url.indexOf('similarsinger') != -1) {
			this.routerLink = '../singerlist'
			this.sub1 = '歌手列表'
			this.sub2 = '相似歌手'
		} else if(url.indexOf('exportsingernlp') != -1) {
			this.routerLink = '../singerlist'
			this.sub1 = '歌手列表'
			this.sub2 = '导入歌手nlp'
		} else if(url.indexOf('singersonglist') != -1) {
			this.routerLink = '../singerlist'
			this.sub1 = '歌手列表'
			this.sub2 = '歌手歌曲列表'
		}
	}
}